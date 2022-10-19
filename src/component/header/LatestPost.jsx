import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import { postAPI } from '../../shared/api';
import { slideState } from '../../atoms/common/commonState';

function LatestPost() {
    const navigate = useNavigate();
    const { data, refetch } = useQuery(
        'likepost',
        () => postAPI.getLatestPostsTopFive(),
        { refetchOnWindowFocus: false },
    );
    const info = data?.data.data;
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useRecoilState(slideState);
    useEffect(() => {
        if (info) setPosts(info);
    }, [info]);
    useEffect(() => {
        setTimeout(() => {
            setCount(props => (props + 1) % 4);
        }, 10000);
        if (count === 4) {
            refetch();
        }
    }, [count]);

    return (
        <StyleLatestPost>
            <StyleSlider
                dots={false}
                arrows={false}
                infinite
                autoplay
                autoplaySpeed={7000}
                slidesToShow={1}
                slidesToScroll={1}
                vertical
                verticalSwiping
            >
                {posts.map(post => {
                    return (
                        <PostBox
                            key={post.id}
                            count={count}
                            onClick={() => navigate(`/post/${post.id}`)}
                        >
                            <Title>
                                {`최신글 - ${
                                    post.title.length > 30
                                        ? `${post.title.slice(0, 30)} ...`
                                        : post.title
                                } written by ${post.member.nickname}`}
                            </Title>
                        </PostBox>
                    );
                })}
            </StyleSlider>
        </StyleLatestPost>
    );
}

export default LatestPost;

const StyleLatestPost = styled.div`
    letter-spacing: -1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 60px;
    justify-content: center;
    height: 60px;
`;

const PostBox = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`;
const Title = styled.h3`
    margin-right: 10px;
    width: 300px;
`;

const StyleSlider = styled(Slider)``;
