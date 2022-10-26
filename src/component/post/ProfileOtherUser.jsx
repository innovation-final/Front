import React from 'react';
import Modal from 'react-modal';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import SavingsIcon from '@mui/icons-material/Savings';
import api from '../../shared/api';
import { dateParser, esUSNumberParser } from '../../util/parser';

// 모달 스타일
const styleModal = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        zIndex: 998,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        color: 'black',
        overflow: 'auto',
        width: '60%',
        height: '70%',
        top: '15%',
        left: '25%',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '15px',
        borderColor: 'skyblue',
        borderWidth: '2px',
        outline: 'none',
        zIndex: 999,
    },
};

function ProfileOtherUser({ isOpen, closeModal, userId }) {
    const { data } = useQuery(['user', userId], () =>
        api.get(`/profile/${userId}`),
    );
    const userInfo = data?.data?.data;
    return (
        <Modal
            isOpen={isOpen}
            style={styleModal}
            onRequestClose={closeModal} // 오버레이나 esc를 누르면 핸들러 동작
            ariaHideApp={false}
        >
            <StyleLayout>
                <Block>
                    <ImgCard>
                        <CardMedia src={userInfo?.profileImg} />
                    </ImgCard>
                    <CardContent style={{ display: 'flex' }}>
                        <ContentLayout>
                            <NickNameTypography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {userInfo?.nickname}
                            </NickNameTypography>
                            <Typography variant="body2" color="text.secondary">
                                {userInfo?.email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {userInfo?.profileMsg}
                            </Typography>
                        </ContentLayout>
                    </CardContent>
                </Block>
                <Block>
                    <AccountLayout>
                        <IconLayout>
                            <SavingsIcon />
                            <IconText>모의투자 계좌</IconText>
                        </IconLayout>
                        {userInfo?.account === null ? (
                            <NoAccount>계좌가 없습니다.</NoAccount>
                        ) : (
                            <Account>
                                <TextLayout>
                                    <Text
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        계좌
                                    </Text>
                                    <Content>***-****-****</Content>
                                </TextLayout>
                                <TextLayout>
                                    <Text
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        계좌 만기일
                                    </Text>
                                    <Content>
                                        {dateParser(
                                            userInfo?.account?.createdAt,
                                        )}{' '}
                                        ~{' '}
                                        {dateParser(
                                            userInfo?.account?.expireAt,
                                        )}
                                    </Content>
                                </TextLayout>
                                <TextLayout>
                                    <Text>시드머니</Text>
                                    <Content>
                                        {userInfo?.account &&
                                            esUSNumberParser(
                                                userInfo?.account?.seedMoney,
                                            )}
                                    </Content>
                                </TextLayout>
                                <TextLayout>
                                    <Text>현재머니</Text>
                                    <Content>
                                        {userInfo?.account &&
                                            esUSNumberParser(
                                                userInfo?.account?.balance,
                                            )}
                                    </Content>
                                </TextLayout>
                                <TextLayout>
                                    <Text
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        목표 수익률
                                    </Text>
                                    <Content>
                                        {userInfo?.account?.targetReturnRate *
                                            100}
                                        %
                                    </Content>
                                </TextLayout>
                            </Account>
                        )}
                    </AccountLayout>
                </Block>
            </StyleLayout>
        </Modal>
    );
}

export default ProfileOtherUser;

const StyleLayout = styled.div`
    width: 100%;
    position: relative;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
`;

const Block = styled.div`
    padding: 20px;
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Typography = styled.p`
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
const ImgCard = styled.div`
    border-radius: 500px;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const NickNameTypography = styled.p`
    font-weight: bold;
    margin: 5px;
    font-size: 25px;
    color: ${props => props.theme.textColor};
`;
const CardMedia = styled.img`
    border-radius: 50%;
    padding: 10px;
    margin-top: 5px;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    /* margin: 5% 30% 1% 20%; */
    width: 30%;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const ContentLayout = styled.div`
    width: 100%;
    height: 100px;
`;

const AccountLayout = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
`;
const IconText = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;

const Account = styled.div`
    margin: 20px;
    padding-top: 2%;
`;

const NoAccount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 120px;
`;

const TextLayout = styled.div`
    padding: 3px;
    display: flex;
`;
const Text = styled.p`
    font-weight: bold;
    font-size: 1.5vmin;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap;
    margin-left: 20px;
    color: ${props => props.theme.textColor};
    word-break: break-all;
    flex-grow: ${props => props.flexRatio};
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 25%;
`;
const Content = styled.p`
    font-weight: bold;
    margin-left: 20px;
    font-size: 1.5vmin;
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    padding: 5px;
`;
