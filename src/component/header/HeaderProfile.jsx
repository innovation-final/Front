import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { mypageAPI } from '../../shared/api';

function HeaderProfile() {
    const navigate = useNavigate();
    const { data } = useQuery(['mypage'], () => mypageAPI.getMypage());
    const nickname = data?.data.data.nickname;
    const profileImg = data?.data.data.profileImg;
    useEffect(() => {
        if (data) {
            localStorage.setItem('nickName', nickname);
            localStorage.setItem('imgUrl', profileImg);
        }
    }, []);

    return (
        <StyleProfile>
            <ImageBox>
                <ProfileImage
                    onClick={() => {
                        navigate('/mypage');
                    }}
                    src={profileImg}
                />
            </ImageBox>
            <InfoBox>
                <ProfileInfo>
                    <Hello>어서오세요</Hello>
                    <UserName>{nickname}님!</UserName>
                </ProfileInfo>
            </InfoBox>
            <IconBox>
                <KeyboardArrowDownIcon />
            </IconBox>
            <NotiBox>
                <NotificationsIcon />
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
const IconBox = styled.div`
    padding-top: 10px;
    margin-right: 20px;
`;
const Hello = styled.div`
    font-size: 13px;
`;
const UserName = styled.div`
    font-size: 13px;
`;

const NotiBox = styled.div`
    padding-top: 10px;
`;
