import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import CardContent from '@mui/material/CardContent';
import PaidIcon from '@mui/icons-material/Paid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Typography from '@mui/material/Typography';
import editcog from '../../static/edit.png';
import { mypageAPI } from '../../shared/api';
import LoadingSpinner from '../elements/LoadingSpinner';
import ant from '../../static/ant.jpg';

function MypageMain() {
    const ref = useRef(null);
    const { data, isLoading } = useQuery(['mypage'], () =>
        mypageAPI.getMypage(),
    );
    if (isLoading) return <LoadingSpinner />;

    const nickname = data?.data.data.nickname;
    const profileMsg = data?.data.data.profileMsg;
    const email = data?.data.data.email;
    const profileImg = data?.data.data.profileImg;
    const queryClient = useQueryClient();
    const imageInput = useRef();
    const [isEdit, setIsEdit] = React.useState(false);

    // 사진 수정,미리보기
    const [img, setImg] = useState('');
    const [userImage, setUserImage] = useState('');
    const onChangeImg = e => {
        e.preventDefault();
        imageInput.current.click();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const resultImage = reader.result;
            setUserImage(resultImage);
        };
        if (e.target.files) {
            const uploadFile = e.target.files[0];
            setImg(uploadFile);
        }
    };
    // 닉네임 수정
    const [editNickName, setEditNickName] = React.useState(nickname);
    const onChangeNickName = event => {
        setEditNickName(event.target.value);
    };

    // 자기소개
    const [editProfileMsg, setProfileMsg] = React.useState(profileMsg);
    const onChangeProfileMsg = event => {
        setProfileMsg(event.target.value);
    };

    const patchMypage = async req => {
        const response = await mypageAPI.patchMypage(req);
        return response;
    };

    const editMutation = useMutation(req => patchMypage(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('mypage');
        },
    });

    const onClickEdit = event => {
        event.preventDefault();
        if (window.confirm('수정하겠습니까?')) {
            setIsEdit(false);
            const formData = new FormData();
            formData.append(
                'mypage',
                new Blob([JSON.stringify()], {
                    type: 'application/json',
                }),
            );
            // key값 서버랑 동일해야됨
            formData.append('profileImg', img);
            formData.append('nickname', editNickName);
            formData.append('profileMsg', editProfileMsg);

            editMutation.mutate(formData);
            alert('수정되었습니다');
        } else {
            return false;
        }
        return 0;
    };

    // 탈퇴

    const deleteMypage = () => {
        const response = mypageAPI.deleteMypage();
        return response;
    };
    const deleteMutation = useMutation(deleteMypage, {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries();
        },
    });
    const onDelete = () => {
        deleteMutation.mutate();
    };

    return (
        <CardLayout>
            <ProfileLayout>
                {!isEdit ? (
                    <ProfileCard>
                        <Button onClick={() => setIsEdit(true)}>
                            <EditCogBtn src={editcog} />
                        </Button>

                        <ImgCard>
                            <CardMedia src={profileImg || ant} />
                        </ImgCard>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {nickname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {profileMsg}
                            </Typography>
                            <WithdrawLayout>
                                <WithdrawButton onClick={onDelete}>
                                    회원탈퇴
                                </WithdrawButton>
                            </WithdrawLayout>
                        </CardContent>
                    </ProfileCard>
                ) : (
                    <ProfileCard>
                        <Button onClick={onClickEdit}>수정완료</Button>

                        <ImgCard>
                            {profileImg && (
                                <CardMedia
                                    src={userImage || profileImg}
                                    alt="preview-img"
                                />
                            )}
                            <CogLayout>
                                <input
                                    type="file"
                                    id="profile-upload"
                                    accept="image/*"
                                    ref={imageInput}
                                    style={{ display: 'none' }}
                                    onChange={onChangeImg}
                                />

                                <Button onClick={onChangeImg}>
                                    <CogBtn src={editcog} />
                                </Button>
                            </CogLayout>
                        </ImgCard>
                        <CardContent>
                            <InputBox>
                                <Input
                                    onChange={onChangeNickName}
                                    value={editNickName}
                                    ref={ref}
                                />
                            </InputBox>

                            <ProfileMsgBox>
                                <ProfileMsgInput
                                    onChange={onChangeProfileMsg}
                                    value={editProfileMsg}
                                    ref={ref}
                                />
                            </ProfileMsgBox>
                        </CardContent>
                    </ProfileCard>
                )}
            </ProfileLayout>
            <CardsLayout>
                <Card>
                    {' '}
                    <IconLayout>
                        <PaidIcon />
                        <Text>모의투자 수익률</Text>
                    </IconLayout>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            숭어
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                        </Typography>
                    </CardContent>
                </Card>

                <Card>
                    <IconLayout>
                        <EmojiEventsIcon />
                        <Text>뱃지/업적</Text>
                    </IconLayout>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            숭어
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                        </Typography>
                    </CardContent>
                </Card>
            </CardsLayout>
        </CardLayout>
    );
}

export default MypageMain;
const CardLayout = styled.div`
    display: flex;
    margin: 30px;
    width: 92%;
    height: 750px;
`;
const ProfileLayout = styled.div`
    width: 100%;
    height: 100%;
    height: 750px;
`;

const ImgCard = styled.div`
    border-radius: 500px;
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const CardMedia = styled.img`
    border-radius: 50%;
    margin: 40px 0px;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    /* margin: 5% 30% 1% 20%; */
    width: 400px;
    height: 400px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const ProfileCard = styled.div`
    position: relative;
    border: 2px solid ${props => props.theme.borderColor};
    margin: 20px;
    border-radius: 15px;
    overflow: scroll;
    height: 750px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Card = styled.div`
    border: 2px solid ${props => props.theme.borderColor};
    margin: 20px;
    height: 363px;
    border-radius: 15px;
    overflow: scroll;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const CardsLayout = styled.div`
    width: 40%;
    object-fit: cover;
`;

const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
const CogLayout = styled.div`
    position: absolute;
    top: 24em;
    right: 33%;
`;

const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;
const Button = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 2px;
    top: 5px;
`;
const WithdrawLayout = styled.div`
    height: 10%;
    width: 100%;
    bottom: 5px;
    position: absolute;
`;
const WithdrawButton = styled.button`
    background-color: transparent;
    border: 1px solid red;
    border-radius: 5px;
    color: ${props => props.theme.withDrawBorderColor};
    cursor: pointer;
    padding: 10px;
    width: 80px;
    position: absolute;
`;
const CogBtn = styled.img`
    width: 40px;
    border: 0;
`;
const EditCogBtn = styled.img`
    width: 22px;
    border: 0;
`;

const InputBox = styled.div`
    width: 95%;
    margin: 10px;
`;
const ProfileMsgBox = styled.div`
    width: 95%;
    margin: 10px;
`;
const Input = styled.input`
    font-family: 'Pretendard-Regular';
    color: ${props => props.theme.textColor};
    padding: 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 10px;
    background-color: ${props => props.theme.inputColor};
    width: 100%;
    &:active,
    &:focus,
    &:hover {
        outline: 2px solid ${props => props.theme.borderColor};
    }
`;
const ProfileMsgInput = styled.textarea`
    font-family: 'Pretendard-Regular';
    color: ${props => props.theme.textColor};
    padding: 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 10px;
    background-color: ${props => props.theme.inputColor};
    width: 100%;
    height: 100px;
    &:active,
    &:focus,
    &:hover {
        outline: 2px solid ${props => props.theme.borderColor};
    }
`;
