import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import useGetUser from '../../hooks/useGetUser';
import { userState } from '../../atoms/user/userState';
import Notice from '../notice/Notice';
import { alarmState } from '../../atoms/alarms/alarmState';

function HeaderProfile({ visible }) {
    const client = useQueryClient();
    const noticeData = client.getQueryData(['alarmNotice'])?.data.data;
    const navigate = useNavigate();
    const { data, isLoading } = useGetUser();
    const [user, setUser] = useRecoilState(userState);
    useEffect(() => {
        if (!isLoading && user) {
            setUser({
                ...data,
                token: localStorage.getItem('access-token'),
                isLogin: true,
            });
        }
    }, [isLoading]);

    // eslint-disable-next-line no-unused-vars
    const [alarmCount, setAlarmCount] = useRecoilState(alarmState);

    useEffect(() => {
        if (!localStorage.getItem('newNoti')) {
            localStorage.setItem('newNoti', 0);
            return;
        }
        localStorage.setItem('newNoti', alarmCount);
    }, [alarmCount, noticeData]);

    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(props => !props);
        localStorage.setItem('newNoti', 0);
        setAlarmCount(0);
    };

    return (
        <StyleProfile visible={visible}>
            <ImageBox>
                <ProfileImage
                    onClick={() => {
                        navigate('/mypage');
                    }}
                    src={user.profileImg}
                />
            </ImageBox>
            <InfoBox>
                <ProfileInfo>
                    <Hello>어서오세요</Hello>
                    <UserName>{user.nickname}님!</UserName>
                </ProfileInfo>
            </InfoBox>
            <NotiBox>
                <Badge badgeContent={alarmCount} color="primary">
                    <NotificationsIcon onClick={showModal} />
                    <Notice setModalOpen={showModal} modalOpen={modalOpen} />
                </Badge>
            </NotiBox>
        </StyleProfile>
    );
}

export default HeaderProfile;

const StyleProfile = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    padding: 5px;

    display: ${props => (props.visible ? 'auto' : 'none')};
`;

const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;
const InfoBox = styled.div`
    position: relative;
    display: flex;
`;
const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 1px 1px 1px 1px gray;
    cursor: pointer;
`;
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 30px;
`;

const Hello = styled.div`
    font-size: 0.7vw;
`;
const UserName = styled.div`
    font-size: 0.7vw;
`;

const NotiBox = styled.div`
    padding-top: 0.7vw;
`;
