import React, { useState, useRef } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Swal from 'sweetalert2';
import editcog from '../../static/edit.png';
import useGetUser from '../../hooks/useGetUser';
import { mypageAPI } from '../../shared/api';
import MypageBadge from './MyPageBadge';

function MypageEdit() {
    const { data } = useGetUser();

    const queryClient = useQueryClient();

    const nickname = data && data.nickname;
    const profileMsg = data && data.profileMsg;
    const email = data && data.email;
    const profileImg = data && data.profileImg;
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
            if (file.size > 0.5 * 1024 * 1024) {
                alert('파일 사이즈가 1mb를 넘습니다');
                return;
            }
            const resultImage = reader.result;
            setUserImage(resultImage);
        };

        if (e.target.files) {
            const uploadFile = e.target.files[0];
            setImg(uploadFile);
        }
    };
    console.log(userImage);
    const patchMypage = async req => {
        const response = await mypageAPI.patchMypage(req);
        return response;
    };

    const editMutation = useMutation(req => patchMypage(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries(['user']);
        },
    });
    // 닉네임 수정
    const [editNickName, setEditNickName] = React.useState(nickname);
    const onChangeNickName = event => {
        setEditNickName(event.target.value);
        editMutation.mutate(editNickName);
    };

    // 자기소개
    const [editProfileMsg, setProfileMsg] = React.useState(profileMsg);
    const onChangeProfileMsg = event => {
        setProfileMsg(event.target.value);
        editMutation.mutate(editProfileMsg);
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
        // function removeLocalStorage() {
        //     return new Promise(resolve => {
        //         setTimeout(() => {
        //             resolve();
        //         }, 800);
        //     });
        // }

        Swal.fire({
            title: '탈퇴하겠습니까?',
            text: '모든 정보가 삭제됩니다 ',
            imageUrl:
                'https://velog.velcdn.com/images/soonger3306/post/c9fc9802-cc28-4aaf-9951-8c0bdc06b812/image.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#ff6026',
            confirmButtonText: '탈퇴',
            cancelButtonText: '취소',
            reverseButtons: true,
        }).then(result => {
            if (result.isConfirmed) {
                deleteMutation.mutate();
                window.location.replace(`/login`);
                // removeLocalStorage().then(localStorage.clear());
            }
        });
    };
    const onClickSetEdit = () => {
        setEditNickName(nickname);
        setProfileMsg(profileMsg);
        setIsEdit(true);
    };

    const onClickEdit = event => {
        event.preventDefault();
        Swal.fire({
            title: '수정하겠습니까?',
            imageUrl:
                'https://velog.velcdn.com/images/soonger3306/post/c9fc9802-cc28-4aaf-9951-8c0bdc06b812/image.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ff6026',
            confirmButtonText: '수정',
            cancelButtonText: '취소',
            reverseButtons: true,
        }).then(result => {
            if (result.isConfirmed) {
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
                Swal.fire('수정되었습니다.');
                localStorage.setItem('nickName', editNickName);
                localStorage.setItem('imgUrl', userImage);
            }
        });
    };

    return (
        <div>
            <ProfileCard>
                {!isEdit ? (
                    <>
                        <Button onClick={onClickSetEdit}>
                            <EditCogBtn src={editcog} />
                        </Button>
                        <ImgCard>
                            <CardMedia src={profileImg} />
                        </ImgCard>
                        <CardContent style={{ display: 'flex' }}>
                            <ContentLayout>
                                <NickNameTypography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {nickname}
                                </NickNameTypography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {email}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {profileMsg}
                                </Typography>
                            </ContentLayout>
                            <WithdrawLayout>
                                <WithdrawButton onClick={onDelete}>
                                    회원탈퇴
                                </WithdrawButton>
                            </WithdrawLayout>
                        </CardContent>
                        <Card>
                            <IconLayout>
                                <EmojiEventsIcon />
                                <Text>뱃지/업적</Text>
                            </IconLayout>{' '}
                            <MypageBadge />
                        </Card>
                    </>
                ) : (
                    <>
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

                                <CogButton onClick={onChangeImg}>
                                    <CogBtn src={editcog} />
                                </CogButton>
                            </CogLayout>
                        </ImgCard>
                        <InputContent>
                            <InputBox>
                                <Input
                                    onChange={onChangeNickName}
                                    placeholder="닉네임"
                                    value={editNickName}
                                />
                            </InputBox>

                            <ProfileMsgBox>
                                <ProfileMsgInput
                                    onChange={onChangeProfileMsg}
                                    placeholder="소개글"
                                    value={editProfileMsg}
                                />
                            </ProfileMsgBox>
                        </InputContent>
                    </>
                )}{' '}
            </ProfileCard>
        </div>
    );
}

export default MypageEdit;
const NickNameTypography = styled.p`
    font-weight: bold;
    margin: 5px;
    font-size: 25px;
    color: ${props => props.theme.textColor};
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

const ProfileCard = styled.div`
    position: relative;
    height: 750px;
    border: 2px solid ${props => props.theme.borderColor};
    margin: 20px;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Button = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 2px;
    top: 5px;
`;
const InputContent = styled.div`
    padding: 60px;
    height: 270px;
`;
const ContentLayout = styled.div`
    width: 100%;
    height: 100px;
`;
const WithdrawLayout = styled.div`
    width: 20%;
    margin-top: 15px;
`;
const WithdrawButton = styled.button`
    background-color: transparent;
    border: 1px solid #e64343;
    border-radius: 5px;
    color: ${props => props.theme.withDrawTextColor};
    cursor: pointer;
    padding: 10px;
    background-color: rgba(254, 112, 112, 0.13);
    width: 80px;
    position: absolute;
    &:hover {
        background-color: #ff5858;
    }
`;
const CogBtn = styled.img`
    width: 40px;
    border: 0;
`;
const CogLayout = styled.div`
    position: absolute;
    top: 78%;
    right: 33%;
`;
const CogButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 2px;
    top: 5px;
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
    height: 10px;
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
    height: 150px;
    &:active,
    &:focus,
    &:hover {
        outline: 2px solid ${props => props.theme.borderColor};
    }
`;

const Card = styled.div`
    border: 2px solid ${props => props.theme.borderColor};
    padding: 5px;
    overflow: scroll;
    margin: 10px 20px 0 20px;
    border-radius: 15px;
    height: 350px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
const IconLayout = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
`;
