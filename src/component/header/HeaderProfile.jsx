import React from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HeaderProfile() {
    return (
        <StyleProfile>
            <ImageBox>
                <ProfileImage src="https://image.edaily.co.kr/images/photo/files/NP/S/2020/03/PS20031800048.jpg" />
            </ImageBox>
            <InfoBox>
                <ProfileInfo>
                    <Hello>어서오세요</Hello>
                    <UserName>개미님!</UserName>
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
