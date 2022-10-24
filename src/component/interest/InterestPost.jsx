import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import useGetRelatedPosts from '../../hooks/useGetRelatedPosts';
import LoadingSpinner from '../elements/LoadingSpinner';
import InterestPostList from './InterestPostList';

function InterestPost({ code }) {
    const { data, isLoading } = useGetRelatedPosts(code);

    if (isLoading) return <LoadingSpinner />;

    const interestPosts = data && data;

    return (
        <div>
            {interestPosts && interestPosts.length === 0 ? (
                <NoArticle>관련 게시글이 없습니다.</NoArticle>
            ) : (
                code &&
                interestPosts.map(interestPost => (
                    <InterestPostList key={uuidv4()} post={interestPost} />
                ))
            )}
        </div>
    );
}

export default InterestPost;
const NoArticle = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
    z-index: 10;
    font-weight: bold;
`;
