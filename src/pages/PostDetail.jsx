import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CommentBox from '../component/comment/CommentBox';
import CommentInput from '../component/comment/CommentInput';
import CommentList from '../component/comment/CommentList';
import Layout from '../component/layout/Layout';
import PostBox from '../component/post/PostBox';
import PostContainer from '../component/post/PostContainer';

const Animation = {
    start: { opacity: 0, y: 30 },
    end: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

function PostDetail() {
    return (
        <Layout sidebar header>
            <PageWrapper variants={Animation} initial="start" animate="end">
                <PostContainer>
                    <PostBox />
                </PostContainer>
                <CommentBox>
                    <CommentInput />
                    <CommentList />
                </CommentBox>
            </PageWrapper>
        </Layout>
    );
}

export default PostDetail;

const PageWrapper = styled(motion.div)`
    background-color: white;
    padding: 30px;
    border: 1px solid #9a9a9a;
    border-radius: 10px;

    box-shadow: 3px 3px 3px 3px gray;
`;
