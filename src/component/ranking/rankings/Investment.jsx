import React from 'react';
import styled from 'styled-components';

function Investment({ ranks }) {
    console.log(ranks);
    return (
        <div>
            {ranks &&
                ranks.map((rank, index) => {
                    if (index + 1 === 1) {
                        return (
                            <StyleTableName key={rank.nickname} ranking={rank}>
                                <RankText>🥇 {index + 1}등</RankText>
                                <Profile src={rank.profileImg} />
                                <NickNameText>{rank.nickname}</NickNameText>
                                <Text>{rank.returnRate * 100}</Text>
                            </StyleTableName>
                        );
                    }
                    if (index + 1 === 2) {
                        return (
                            <StyleTableName key={rank.nickname} ranking={rank}>
                                <RankText>🥈 {index + 1}등</RankText>
                                <Profile src={rank.profileImg} />
                                <NickNameText>{rank.nickname}</NickNameText>
                                <Text>{rank.returnRate * 100}</Text>
                            </StyleTableName>
                        );
                    }
                    if (index + 1 === 3) {
                        return (
                            <StyleTableName key={rank.nickname} ranking={rank}>
                                <RankText>🥉 {index + 1}등</RankText>
                                <Profile src={rank.profileImg} />
                                <NickNameText>{rank.nickname}</NickNameText>
                                <Text>{rank.returnRate * 100}</Text>
                            </StyleTableName>
                        );
                    }
                    return (
                        <StyleTableName key={rank.nickname} ranking={rank}>
                            <RankText>{index + 1}등</RankText>
                            <Profile src={rank.profileImg} />
                            <NickNameText>{rank.nickname}</NickNameText>
                            <Text>{rank.returnRate * 100}</Text>
                        </StyleTableName>
                    );
                })}
        </div>
    );
}

export default Investment;

const RankText = styled.p`
    font-weight: bold;
    width: 30%;
    text-align: center;
    margin: 10px 10px 10px 5px;

    color: ${props => props.theme.textColor};
`;
const Text = styled.p`
    font-weight: bold;
    width: 31%;
    text-align: center;
    margin: 17px;
    color: ${props => props.theme.textColor};
`;
const NickNameText = styled.p`
    font-weight: bold;
    width: 31%;
    text-align: center;
    margin: 17px;

    color: ${props => props.theme.textColor};
`;
const Profile = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 45px;
    border-radius: 50%;
`;

const StyleTableName = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px;
`;
