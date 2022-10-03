import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CommentBox from '../component/comment/CommentBox';
import CommentInput from '../component/comment/CommentInput';
import CommentList from '../component/comment/CommentList';
import Layout from '../component/layout/Layout';
import PostBox from '../component/post/PostBox';
import LoadingSpinner from '../component/elements/LoadingSpinner';
import PostContainer from '../component/post/PostContainer';
import { postAPI } from '../shared/api';

const Animation = {
    start: { opacity: 0, y: 30 },
    end: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function PostDetail() {
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery(['post', id], () =>
        postAPI.getPost(id),
    );
    const info = data?.data.data;

    if (isLoading)
        return (
            <Layout sidebar header>
                <LoadingSpinner />
            </Layout>
        );
    if (isError)
        return (
            <Layout sidebar header>
                <div>잘못된 접근입니다.</div>
            </Layout>
        );
    return (
        <Layout sidebar header>
            <PageWrapper variants={Animation} initial="start" animate="end">
                <PostContainer>
                    <PostBox postInfo={info} />
                </PostContainer>
                <CommentBox>
                    <CommentInput />
                    <CommentList comments={info.comments} />
                </CommentBox>
            </PageWrapper>
        </Layout>
    );
}

export default PostDetail;

const PageWrapper = styled(motion.div)`
    background-color: ${props => props.theme.bgColor};
    padding: 30px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
