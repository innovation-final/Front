import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useGetPosts from '../hooks/useGetPosts';
import Layout from '../component/layout/Layout';
import BoardContainer from '../component/community/BoardContainer';
import BoardCards from '../component/community/BoardCards';
import Button from '../component/elements/Button';
import Pagination from '../component/elements/Pagination';
import LoadingSpinner from '../component/elements/LoadingSpinner';
import SelectBox from '../component/elements/SelectBox';

const options = ['최신순', '좋아요순', '오래된순'];
const defaultOption = '최신순';

function CommunityBoard() {
    const navigate = useNavigate();
    const [option, setOption] = useState(defaultOption);
    const getOption = selected => {
        setOption(selected);
    };
    const query = useGetPosts(option);
    const [posts, setPosts] = useState([]);

    const postData = query.data?.data.data;
    const refetchPosts = () => {
        setPosts(postData);
        query.refetch();
    };

    useEffect(() => {
        refetchPosts();
    }, [postData, option, setOption]);

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 10;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => {
        setCurrentPage(pageNum);
        window.scrollTo(0, 0);
    };

    if (!query.data) return <LoadingSpinner />;
    return (
        <Layout>
            <BoardContainer>
                <CommunityHeader>
                    <Handlers>
                        <HeaderTitle>자유게시판</HeaderTitle>
                        <SelectBox
                            options={options}
                            selectedOption={option}
                            _getOption={getOption}
                        />
                    </Handlers>
                    <Button
                        size="md"
                        _onClick={() => {
                            navigate('/communityboardwrite');
                        }}
                    >
                        글쓰기
                    </Button>
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
    margin-bottom: 60px;
`;
const HeaderTitle = styled.div`
    font-size: 25px;
    margin-right: 20px;
`;
const Handlers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
