import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileOtherUser from '../../post/ProfileOtherUser';

function RankingItem({
    nickname,
    index,
    profileImg,
    returnRate,
    memberId,
    likeNum,
    type = 'investment',
}) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <StyleTableName key={nickname}>
            <TextLayout>
                {index === 0
                    ? '🥇'
                    : index === 1
                    ? '🥈'
                    : index === 2
                    ? '🥉'
                    : null}
                {index + 1}등
            </TextLayout>
            <TextLayout>
                <NickNameText onClick={openModal}>
                    <Profile src={profileImg} />
                    {nickname}
                </NickNameText>
            </TextLayout>
            {type === 'investment' ? (
                <TextLayout> {(returnRate * 100).toFixed(3)}%</TextLayout>
            ) : (
                <TextLayout> {likeNum}개</TextLayout>
            )}
            {isOpen ? (
                <ProfileOtherUser
                    isOpen={isOpen}
                    closeModal={closeModal}
                    userId={memberId}
                />
            ) : null}
        </StyleTableName>
    );
}

export default RankingItem;
const NickNameText = styled.div`
    cursor: pointer;
    font-weight: bold;
    margin-right: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    display: flex;
    color: ${props => props.theme.textColor};
`;
const Profile = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 25px;
    margin-right: 10px;
    border-radius: 50%;
    box-shadow: 1px 1px 1px 1px gray;
`;

const StyleTableName = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px;
`;
const TextLayout = styled.div`
    font-weight: bold;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin: 5px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.textColor};
`;
