import React, { useState, useRef } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import editcog from '../../static/edit.png';
import useGetUser from '../../hooks/useGetUser';
import { mypageAPI } from '../../shared/api';

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
            const resultImage = reader.result;
            setUserImage(resultImage);
        };
        if (e.target.files) {
            const uploadFile = e.target.files[0];
            setImg(uploadFile);
        }
    };

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
        function removeLocalStorage() {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, 500);
            });
        }
        deleteMutation.mutate();
        removeLocalStorage().then(localStorage.clear());
        window.location.replace(`/login`);
    };
    const onClickSetEdit = () => {
        setEditNickName(nickname);
        setProfileMsg(profileMsg);
        setIsEdit(true);
    };

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
            localStorage.setItem('nickName', editNickName);

            localStorage.setItem('imgUrl', userImage);
        }
    };

    return (
        <div>
            {' '}
            {!isEdit ? (
                <ProfileCard>
                    <Button onClick={onClickSetEdit}>
                        <EditCogBtn src={editcog} />
                    </Button>

                    <ImgCard>
                        <CardMedia src={profileImg} />
                    </ImgCard>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
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
                            />
                        </InputBox>

                        <ProfileMsgBox>
                            <ProfileMsgInput
                                onChange={onChangeProfileMsg}
                                value={editProfileMsg}
                            />
                        </ProfileMsgBox>
                    </CardContent>
                </ProfileCard>
            )}
        </div>
    );
}

export default MypageEdit;

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
const CogLayout = styled.div`
    position: absolute;
    top: 24em;
    right: 33%;
`;
