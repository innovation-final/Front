import React from 'react';
import styled from 'styled-components';
import buyStock from '../../static/buyStockBadge.png';
import comment from '../../static/commentBadge.png';
import dislike from '../../static/dislikeBadge.png';
import kinds from '../../static/kindsBadge.png';
import like from '../../static/likeBadge.png';
import manyStock from '../../static/manyStockBadge.png';
import post from '../../static/postBadge.png';
import mark from '../../static/mark.png';

function MypageBadge({ badge }) {
    const badges =
        badge &&
        badge.map(myBadge => {
            return myBadge.name;
        });
    const isInclude = badgeName => {
        if (!badges) return false;
        if (badges.includes(badgeName)) return true;
        return false;
    };

    return (
        <Layout>
            <BadgeGrid>
                <BadgeContainer>
                    {isInclude('POST') ? (
                        <BadgeImg src={post} />
                    ) : (
                        <BadgeImg src={mark} />
                    )}
                    <BadgeTitle>활발한 주식박사</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('COMMENT') ? (
                        <BadgeImg src={comment} />
                    ) : (
                        <BadgeImg src={mark} />
                    )}
                    <BadgeTitle>조잘조잘 수다왕</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('LIKE') ? (
                        <BadgeImg src={like} />
                    ) : (
                        <BadgeImg src={mark} />
                    )}
                    <BadgeTitle>러블리한 인플루언서</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('DISLIKE') ? (
                        <BadgeImg src={dislike} />
                    ) : (
                        <BadgeImg src={mark} />
                    )}
                    <BadgeTitle>음 무슨글을 썼길래?</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('VIEW') ? (
                        <BadgeImg src={kinds} />
                    ) : (
                        <BadgeImg src={mark} />
                    )}
                    <BadgeTitle>개미들의 친구</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('BUY') ? (
                        <BadgeImg src={buyStock} />
                    ) : (
                        <BadgeImg src={mark} />
                    )}
                    <BadgeTitle>워렌버핏이 돼보자</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('STOCKHOLD') ? (
                        <BadgeImg src={manyStock} />
                    ) : (
                        <BadgeImg src={mark} />
                    )}
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
