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
                        <Boxwrap>
                            <Box>
                                <BadgeImg src={mark} />
                                <BoxInfo>
                                    <p>
                                        커뮤니티/ 5개 이상 글 쓰면 얻을 수
                                        있습니다!
                                    </p>
                                </BoxInfo>
                            </Box>
                        </Boxwrap>
                    )}

                    <BadgeTitle>활발한 주식박사</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('COMMENT') ? (
                        <BadgeImg src={comment} />
                    ) : (
                        <Boxwrap>
                            <Box>
                                <BadgeImg src={mark} />
                                <BoxInfo>
                                    <p>
                                        커뮤니티/ 작성된 글에서 10개 이상 댓글
                                        달면 얻을 수 있습니다!
                                    </p>
                                </BoxInfo>
                            </Box>
                        </Boxwrap>
                    )}
                    <BadgeTitle>조잘조잘 수다왕</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('LIKE') ? (
                        <BadgeImg src={like} />
                    ) : (
                        <Boxwrap>
                            <Box>
                                <BadgeImg src={mark} />
                                <BoxInfo>
                                    <p>
                                        커뮤니티/ 작성한 글 합산 좋아요 10개
                                        이상 받으면 얻을 수 있습니다!
                                    </p>
                                </BoxInfo>
                            </Box>
                        </Boxwrap>
                    )}
                    <BadgeTitle>러블리한 인플루언서</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('DISLIKE') ? (
                        <BadgeImg src={dislike} />
                    ) : (
                        <Box>
                            <BadgeImg src={mark} />
                            <BoxInfo>
                                <p>
                                    커뮤니티/ 이 뱃지를 받게 된다면 앞으로 글을
                                    이쁘게 써주세요!
                                </p>
                            </BoxInfo>
                        </Box>
                    )}
                    <BadgeTitle>음 무슨글을 썼길래?</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('VIEW') ? (
                        <BadgeImg src={kinds} />
                    ) : (
                        <Boxwrap>
                            <Box>
                                <BadgeImg src={mark} />
                                <BoxInfo>
                                    <p>
                                        커뮤니티/ 작성된 글 합산 조회 수 50회
                                        이상 넘으면 받을 수 있습니다!
                                    </p>
                                </BoxInfo>
                            </Box>
                        </Boxwrap>
                    )}
                    <BadgeTitle>개미들의 친구</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('BUY') ? (
                        <BadgeImg src={buyStock} />
                    ) : (
                        <Boxwrap>
                            <Box>
                                <BadgeImg src={mark} />
                                <BoxInfo>
                                    <p>
                                        모의투자/ 첫 주식 매수시 얻으실 수
                                        있습니다!
                                    </p>
                                </BoxInfo>
                            </Box>
                        </Boxwrap>
                    )}
                    <BadgeTitle>워렌버핏이 돼보자</BadgeTitle>
                </BadgeContainer>
                <BadgeContainer>
                    {isInclude('STOCKHOLD') ? (
                        <BadgeImg src={manyStock} />
                    ) : (
                        <Boxwrap>
                            <Box>
                                <BadgeImg src={mark} />
                                <BoxInfo>
                                    <p>
                                        모의투자/ 한 종목에서 100주 이상
                                        매수하시면 얻으실 수 있습니다!
                                    </p>
                                </BoxInfo>
                            </Box>
                        </Boxwrap>
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
    margin-right: 10px;
`;

const BadgeContainer = styled.div``;
const BadgeTitle = styled.div``;
const BadgeImg = styled.img`
    justify-content: space-evenly;
    width: 75%;
    cursor: pointer;
`;
const Boxwrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BoxInfo = styled.div`
    color: #fff;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 75%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    opacity: 0;
    left: 0;
    bottom: 0;
    overflow: scroll;
    transition: opacity 0.35s ease-in-out;
    p {
        font-size: 14px;
    }
`;
const Box = styled.div`
    position: relative;

    &:hover ${BoxInfo} {
        opacity: 1;
    }
`;
