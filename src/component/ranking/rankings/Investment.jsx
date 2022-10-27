import React from 'react';
import styled from 'styled-components';
import RankingItem from './RankingItem';

function Investment({ ranks }) {
    return (
        <div>
            {ranks &&
                ranks.map((rank, index) => {
                    if (index + 1 === 1) {
                        return (
                            <RankingItem
                                key={rank.memberId}
                                memberId={rank.memberId}
                                nickname={rank.nickname}
                                index={index}
                                profileImg={rank.profileImg}
                                returnRate={rank.returnRate}
                            />
                        );
                    }
                    if (index + 1 === 2) {
                        return (
                            <RankingItem
                                key={rank.memberId}
                                memberId={rank.memberId}
                                nickname={rank.nickname}
                                index={index}
                                profileImg={rank.profileImg}
                                returnRate={rank.returnRate}
                            />
                        );
                    }
                    if (index + 1 === 3) {
                        return (
                            <RankingItem
                                key={rank.memberId}
                                memberId={rank.memberId}
                                nickname={rank.nickname}
                                index={index}
                                profileImg={rank.profileImg}
                                returnRate={rank.returnRate}
                            />
                        );
                    }
                    return (
                        <RankingItem
                            key={rank.memberId}
                            memberId={rank.memberId}
                            nickname={rank.nickname}
                            index={index}
                            profileImg={rank.profileImg}
                            returnRate={rank.returnRate}
                        />
                    );
                })}
        </div>
    );
}

export default Investment;
