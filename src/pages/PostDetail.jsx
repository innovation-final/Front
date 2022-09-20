import React from 'react';
import styled from 'styled-components';
import CommentBox from '../component/comment/CommentBox';
import CommentInput from '../component/comment/CommentInput';
import CommentList from '../component/comment/CommentList';
import Layout from '../component/layout/Layout';
import PostBox from '../component/post/PostBox';
import PostContainer from '../component/post/PostContainer';

function PostDetail() {
    return (
        <Layout sidebar header>
            <PageWrapper>
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

const PageWrapper = styled.div`
    background-color: white;
    padding: 30px;
    border: 1px solid #9a9a9a;
    border-radius: 10px;
`;
