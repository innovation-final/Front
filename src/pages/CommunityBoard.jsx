import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { postAPI } from '../shared/api';
import Layout from '../component/layout/Layout';
import BoardContainer from '../component/community/BoardContainer';
import BoardCards from '../component/community/BoardCards';
import Button from '../component/elements/Button';
import Pagination from '../component/elements/Pagination';
import LoadingSpinner from '../component/elements/LoadingSpinner';
import SelectBox from '../component/elements/SelectBox';

function CommunityBoard() {
    const navigate = useNavigate();
    const { data } = useQuery('posts', () => postAPI.getPosts());
    const postArray = data?.data.data;

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

    useEffect(() => {
        setPosts(postArray);
    });

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => setCurrentPage(pageNum);

    if (!data) return <LoadingSpinner />;
    return (
        <Layout>
            <BoardContainer>
                <CommunityHeader>
                    <HeaderTitle>자유게시판</HeaderTitle>
                    <Handlers>
                        <Button
                            size="md"
                            _onClick={() => {
                                navigate('/communityboardwrite');
                            }}
                        >
                            글쓰기
                        </Button>
                        <SelectBox options={['최신순', '좋아요순']} />
                    </Handlers>
                </CommunityHeader>
                <BoardCards data={currentPosts} />
            </BoardContainer>
            <Pagination
                postPerPage={postPerPage}
                totalPosts={posts?.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </Layout>
    );
}

export default CommunityBoard;

const CommunityHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin-bottom: 30px;
`;
const HeaderTitle = styled.div`
    font-size: 25px;
`;
const Handlers = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
