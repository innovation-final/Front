import React from 'react';
import styled from 'styled-components';

function Investment({ ranks }) {
    return (
        <div>
            {ranks &&
                ranks.map((rank, index) => {
                    if (index + 1 === 1) {
                        return (
                            <StyleTableName key={rank.nickname} ranking={rank}>
                                <TextLayout>🥇 {index + 1}등</TextLayout>

                                <TextLayout>
                                    <NickNameText>
                                        <Profile src={rank.profileImg} />
                                        {rank.nickname}
                                    </NickNameText>
                                </TextLayout>
                                <TextLayout>
                                    {(rank.returnRate * 100).toFixed(3)}%
                                </TextLayout>
                            </StyleTableName>
                        );
                    }
                    if (index + 1 === 2) {
                        return (
                            <StyleTableName key={rank.nickname} ranking={rank}>
                                <TextLayout>🥈 {index + 1}등</TextLayout>
                                <TextLayout>
                                    <NickNameText>
                                        <Profile src={rank.profileImg} />
                                        {rank.nickname}
                                    </NickNameText>
                                </TextLayout>
                                <TextLayout>
                                    {(rank.returnRate * 100).toFixed(3)}%
                                </TextLayout>
                            </StyleTableName>
                        );
                    }
                    if (index + 1 === 3) {
                        return (
                            <StyleTableName key={rank.nickname} ranking={rank}>
                                <TextLayout>🥉 {index + 1}등</TextLayout>
                                <TextLayout>
                                    <NickNameText>
                                        <Profile src={rank.profileImg} />
                                        {rank.nickname}
                                    </NickNameText>
                                </TextLayout>
                                <TextLayout>
                                    {(rank.returnRate * 100).toFixed(3)}%
                                </TextLayout>
                            </StyleTableName>
                        );
                    }
                    return (
                        <StyleTableName key={rank.nickname} ranking={rank}>
                            <TextLayout>{index + 1}등</TextLayout>
                            <TextLayout>
                                <NickNameText>
                                    <Profile src={rank.profileImg} />
                                    {rank.nickname}
                                </NickNameText>
                            </TextLayout>
                            <TextLayout>
                                {(rank.returnRate * 100).toFixed(3)}%
                            </TextLayout>
                        </StyleTableName>
                    );
                })}
        </div>
    );
}

export default Investment;

const NickNameText = styled.div`
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
`;

const StyleTableName = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px;
`;
const TextLayout = styled.p`
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
