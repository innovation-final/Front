import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ant from '../../static/ant.jpg';
import Button from '../elements/Button';

function ProfileCard({ user }) {
    const { nickname, profileImg, profileMsg } = user;

    return (
        <StyleProfileCard>
            <Wrapper>
                <ImageBox>
                    <ProfileImage src={profileImg || ant} />
                </ImageBox>
                <ContentBox>
                    <UserName>{nickname}</UserName>
                    <UserComment>{profileMsg}</UserComment>
                </ContentBox>
            </Wrapper>
            <ButtonBox>
                <Button variant="success">프로필 보기</Button>
            </ButtonBox>
        </StyleProfileCard>
    );
}

export default ProfileCard;

ProfileCard.propTypes = {
    user: PropTypes.shape({
        nickname: PropTypes.string,
        email: PropTypes.string,
    }),
};

const StyleProfileCard = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 50px;
    /* border: 1px solid gray; */
    border-radius: 15px;
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
    border-color: ${props => props.theme.borderColor};
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
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
`;
