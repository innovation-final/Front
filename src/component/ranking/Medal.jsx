import React from 'react';
import styled from 'styled-components';
import top1 from '../../static/1.png';
import top2 from '../../static/2.png';
import top3 from '../../static/3.png';

function Medal({ ranks }) {
    const nickname1 = ranks && ranks[0].nickname;
    const returnRate1 = ranks && ranks[0].returnRate;

    const nickname2 = ranks && ranks[1].nickname;
    const returnRate2 = ranks && ranks[1].returnRate;

    const nickname3 = ranks && ranks[2].nickname;
    const returnRate3 = ranks && ranks[2].returnRate;
    if (!ranks)
        return (
            <Layout>
                <MedalLayout>
                    <MedalImg src={top1} />
                </MedalLayout>
                <TextLayout>
                    <Text>닉네임:</Text>
                </TextLayout>
                <TextLayout>
                    <Text>수익률:</Text>
                </TextLayout>
                <MedalLayout>
                    <MedalImg src={top2} />
                    <MedalImg src={top3} />
                </MedalLayout>
                <TextLayout>
                    <Text>닉네임:</Text>
                    <Text>닉네임:</Text>
                </TextLayout>
                <TextLayout>
                    <Text>수익률:</Text>
                    <Text>수익률:</Text>
                </TextLayout>
            </Layout>
        );
    return (
        <Layout>
            <MedalLayout>
                <MedalImg src={top1} />
            </MedalLayout>
            <TextLayout>
                <Text>닉네임:{nickname1}</Text>
            </TextLayout>
            <TextLayout>
                <Text>수익률: {(returnRate1 * 100).toFixed(3)}%</Text>
            </TextLayout>
            <MedalLayout>
                <MedalImg src={top2} />
                <MedalImg src={top3} />
            </MedalLayout>
            <TextLayout>
                <Text>닉네임:{nickname2}</Text>
                <Text>닉네임:{nickname3}</Text>
            </TextLayout>
            <TextLayout>
                <Text>수익률: {(returnRate2 * 100).toFixed(3)}%</Text>
                <Text>수익률: {(returnRate3 * 100).toFixed(3)}%</Text>
            </TextLayout>
        </Layout>
    );
}

export default Medal;

const Layout = styled.div`
    width: 100%;
    height: 100%;
`;
const MedalLayout = styled.div`
    margin-top: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
`;
const MedalImg = styled.img`
    justify-content: space-evenly;
    width: 35%;
    object-fit: cover;
    cursor: pointer;
`;
const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
const TextLayout = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    justify-content: space-around;
    border-radius: 15px;
`;
