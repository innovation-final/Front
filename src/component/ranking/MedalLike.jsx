import React from 'react';
import styled from 'styled-components';
import top1 from '../../static/1.png';
import top2 from '../../static/2.png';
import top3 from '../../static/3.png';

function MedalLike({ likeRank }) {
    const nickname1 = likeRank && likeRank[0].nickname;
    const likeNum1 = likeRank && likeRank[0].likeNum;
    const nickname2 = likeRank && likeRank[1].nickname;
    const likeNum2 = likeRank && likeRank[1].likeNum;
    const nickname3 = likeRank && likeRank[2].nickname;
    const likeNum3 = likeRank && likeRank[2].likeNum;

    if (
        (!nickname1,
        likeNum1,
        nickname2,
        likeNum2,
        nickname3,
        likeNum3 === undefined)
    ) {
        return null;
    }

    return (
        <Layout>
            <MedalLayout>
                <MedalImg src={top1} />
            </MedalLayout>
            <TextLayout>
                <Text>닉네임:{nickname1}</Text>
            </TextLayout>
            <TextLayout>
                <Text>좋아요: {likeNum1}개</Text>
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
                <Text>좋아요 : {likeNum2}개</Text>
                <Text>좋아요 : {likeNum3}개</Text>
            </TextLayout>
        </Layout>
    );
}

export default MedalLike;
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
    width: 40%;
    object-fit: cover;
    cursor: pointer;
`;
const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    margin-left: 15px;
    color: ${props => props.theme.textColor};
`;

const TextLayout = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    justify-content: space-around;
    border-radius: 15px;
`;
