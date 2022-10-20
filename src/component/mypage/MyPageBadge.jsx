import React from 'react';
import styled from 'styled-components';
import buyStock from '../../static/buyStockBadge.png';
import comment from '../../static/commentBadge.png';
import dislike from '../../static/dislikeBadge.png';
import kinds from '../../static/kindsBadge.png';
import like from '../../static/likeBadge.png';
import manyStock from '../../static/manyStockBadge.png';
import post from '../../static/postBadge.png';

function MypageBadge({ badge }) {
    console.log(badge);
    const postBadge = badge && badge[2].name;
    console.log(postBadge, 'D');
    return (
        <Layout>
            <BadgeGrid>
                <BadgeContainer>
                    {!postBadge ? <BadgeImg src={post} /> : '없음'}
                    <BadgeTitle>활발한 주식박사</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    <BadgeImg src={comment} />
                    <BadgeTitle>조잘조잘 수다왕</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    <BadgeImg src={like} />
                    <BadgeTitle>러블리한 인플루언서</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    <BadgeImg src={dislike} />
                    <BadgeTitle>음 무슨글을 썼길래?</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    <BadgeImg src={kinds} />
                    <BadgeTitle>개미들의 친구</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    <BadgeImg src={buyStock} />
                    <BadgeTitle>워렌버핏이 돼보자</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    <BadgeImg src={manyStock} />
                    <BadgeTitle>이 구역의 최대주주</BadgeTitle>
                </BadgeContainer>
            </BadgeGrid>
        </Layout>
    );
}

export default MypageBadge;

const Layout = styled.div`
    width: 100%;
    margin-left: 15px;
`;
const BadgeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
`;
const BadgeContainer = styled.div``;
const BadgeTitle = styled.p``;
const BadgeImg = styled.img`
    justify-content: space-evenly;
    width: 75%;
    cursor: pointer;
`;
