import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { postAPI } from '../../shared/api';

function LatestPost() {
    const { data, refetch } = useQuery(
        'likepost',
        () => postAPI.getLatestPostsTopFive(),
        { refetchOnWindowFocus: false },
    );
    const info = data?.data.data;
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (info) setPosts(info);
    }, [info]);
    useEffect(() => {
        setTimeout(() => {
            setCount(props => (props + 1) % 5);
        }, 5000);
        if (count === 5) refetch();
    }, [count]);

    return (
        <StyleLatestPost>
            {posts.map(post => {
                return (
                    <PostBox key={post.id} count={count}>
                        <Title>{`최신글   -   ${post.title}`}</Title>
                        <Author>{`written by ${post.member.nickname}`}</Author>
                    </PostBox>
                );
            })}
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
    overflow-y: hidden;
`;

const PostBox = styled.div`
    display: flex;
    margin: 20px 0px;
    height: 60px;
    transform: translateY(${props => 200 - props.count * 100}px);
    transition: all ease-in-out 0.5s;
`;
const Title = styled.div`
    margin-right: 10px;
`;
const Author = styled.div``;
