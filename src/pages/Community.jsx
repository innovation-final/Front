import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import useGetPosts from '../hooks/useGetPosts';
import Layout from '../component/layout/Layout';
import BoardContainer from '../component/community/BoardContainer';
import BoardCards from '../component/community/BoardCards';
import Button from '../component/elements/Button';
import Pagination from '../component/elements/Pagination';
import LoadingSpinner from '../component/elements/LoadingSpinner';
import SelectBox from '../component/elements/SelectBox';

const options = [
    { name: '최신순', value: '최신순' },
    { name: '좋아요순', value: '좋아요순' },
    { name: '오래된순', value: '오래된순' },
];
const defaultOption = '최신순';

function Community() {
    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 10;

    const navigate = useNavigate();
    const [option, setOption] = useState(defaultOption);
    const getOption = selected => {
        setOption(selected);
    };
    const { data, isLoading, invalidate } = useGetPosts(option, currentPage);
    const [posts, setPosts] = useState([]);
    const postData = data && data['페이지당 게시글'];
    const totalPosts = data && data['총 게시글 개수'];
    const refetchPosts = () => {
        setPosts(postData);
        invalidate();
    };

    useEffect(() => {
        refetchPosts();
    }, [currentPage, postData, option, setOption]);

    const paginate = pageNum => {
        setCurrentPage(pageNum);
        window.scrollTo(0, 0);
    };
    const leftMove = () => {
        if (currentPage) return;
        setCurrentPage(props => props - 1);
    };
    const rightMove = lastPage => {
        if (currentPage === lastPage) return;
        setCurrentPage(props => props + 1);
    };

    console.log(currentPage, postData);

    return (
        <Layout>
            <Helmet>
                <title>{`Stock's talk | 커뮤니티`}</title>
            </Helmet>
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
                {isLoading ? <LoadingSpinner /> : <BoardCards data={posts} />}
            </BoardContainer>
            <PaginationBox>
                <Pagination
                    postPerPage={postPerPage}
                    totalPosts={totalPosts}
                    paginate={paginate}
                    currentPage={currentPage}
                    leftMove={leftMove}
                    rightMove={rightMove}
                />
            </PaginationBox>
        </Layout>
    );
}

export default Community;

const CommunityHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
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
const PaginationBox = styled.div`
    width: 100%;
`;
