import React from 'react';
import styled from 'styled-components';
import RankingItem from './RankingItem';

function Like({ likeRank }) {
    return (
        <div>
            {likeRank &&
                likeRank.map((like, index) => {
                    if (index + 1 === 1) {
                        return (
                            <RankingItem
                                key={like.memberId}
                                memberId={like.memberId}
                                nickname={like.nickname}
                                index={index}
                                profileImg={like.profileImg}
                                likeNum={like.likeNum}
                                type="like"
                            />
                        );
                    }
                    if (index + 1 === 1) {
                        return (
                            <RankingItem
                                key={like.memberId}
                                memberId={like.memberId}
                                nickname={like.nickname}
                                index={index}
                                profileImg={like.profileImg}
                                likeNum={like.likeNum}
                                type="like"
                            />
                        );
                    }
                    if (index + 1 === 1) {
                        return (
                            <RankingItem
                                key={like.memberId}
                                memberId={like.memberId}
                                nickname={like.nickname}
                                index={index}
                                profileImg={like.profileImg}
                                likeNum={like.likeNum}
                                type="like"
                            />
                        );
                    }
                    return (
                        <RankingItem
                            key={like.memberId}
                            memberId={like.memberId}
                            nickname={like.nickname}
                            index={index}
                            profileImg={like.profileImg}
                            likeNum={like.likeNum}
                            type="like"
                        />
                    );
                })}
        </div>
    );
}

export default Like;
