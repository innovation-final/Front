import React from 'react';
import styled from 'styled-components';
import top1 from '../../static/1.png';
import top2 from '../../static/2.png';
import top3 from '../../static/3.png';

function Medal() {
    return (
        <Layout>
            <MedalLayout>
                <MedalImg src={top1} />
            </MedalLayout>
            <TextLayout>
                <Text>닉네임:숭어</Text>
            </TextLayout>
            <TextLayout>
                <Text>수익률:30%</Text>
            </TextLayout>
            <MedalLayout>
                <MedalImg src={top2} />
                <MedalImg src={top3} />
            </MedalLayout>
            <TextLayout>
                <Text>닉네임:숭어2</Text>
                <Text>닉네임:숭어3</Text>
            </TextLayout>
            <TextLayout>
                <Text>수익률:20%</Text>
                <Text>수익률:10%</Text>
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
