import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';

function ProfileCard() {
    return (
        <StyleProfileCard>
            <Wrapper>
                <ImageBox>
                    <ProfileImage src="https://image.edaily.co.kr/images/photo/files/NP/S/2020/03/PS20031800048.jpg" />
                </ImageBox>
                <ContentBox>
                    <UserName>개미</UserName>
                    <UserComment>열심히 일하는 개미입니다.</UserComment>
                </ContentBox>
            </Wrapper>
            <ButtonBox>
                <Button variant="success">프로필 보기</Button>
            </ButtonBox>
        </StyleProfileCard>
    );
}

export default ProfileCard;

const StyleProfileCard = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 50px;
    /* border: 1px solid gray;
    border-radius: 15px; */
`;

const Wrapper = styled.div`
    min-height: 100px;
    width: 100%;
    margin: 10px auto;
    display: flex;
`;

const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
`;
const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 5%;
    object-fit: cover;
    box-shadow: 3px 3px 3px 3px gray;
`;
const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
`;
const UserName = styled.div`
    font-weight: 600;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
`;
const UserComment = styled.div``;

const ButtonBox = styled.div`
    width: 10%;
    margin-right: 30px;
`;
