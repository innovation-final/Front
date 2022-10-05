import React from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { stockAPI } from '../../shared/api';
import ContentBox from '../elements/ContentBox';
import LoadingSpinner from '../elements/LoadingSpinner';
import { dateParser } from '../../util/parser';

const keys = ['제목', '작성자', '날짜'];

function RelatedPostsBox({ isPC }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useQuery('stockPosts', () =>
        stockAPI.getStockPosts(id),
    );
    if (isLoading) return <LoadingSpinner />;
    const info = data.data.data.slice(0, 10);
    return (
        <StyleRelatedPostsBox isPC={isPC}>
            <Title>관련 게시글</Title>
            <ContentBox>
                <PostWrapper>
                    <TableNames>
                        {keys.map(key => (
                            <TableName key={key}>{key}</TableName>
                        ))}
                    </TableNames>
                    {info.length === 0 ? (
                        <NoArticle>관련 게시글이 없습니다.</NoArticle>
                    ) : (
                        <TableData>
                            {info.map(post => (
                                <ArticleInfo
                                    key={post.title}
                                    onClick={() => navigate(`/post/${post.id}`)}
                                >
                                    <ArticleTitle>
                                        {post.title.length < 12
                                            ? post.title
                                            : `${post.title.slice(0, 12)} ...`}
                                    </ArticleTitle>
                                    <ArticleDivide>
                                        <ArticleAuthor>
                                            {post.member.nickname}
                                        </ArticleAuthor>
                                        <ArticleDate>
                                            {dateParser(post.createdAt)}
                                        </ArticleDate>
                                    </ArticleDivide>
                                </ArticleInfo>
                            ))}
                        </TableData>
                    )}
                </PostWrapper>
            </ContentBox>
        </StyleRelatedPostsBox>
    );
}

export default RelatedPostsBox;

const StyleRelatedPostsBox = styled.div`
    width: ${props => (props.isPC ? '30' : '100')}%;
`;

const Title = styled.div`
    height: 50px;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
`;

const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 15px;
`;

const TableNames = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.secondaryColor};
    height: 37px;
    border-radius: 15px 15px 0px 0px;
    margin-bottom: 20px;
`;

const TableName = styled.div``;

const TableData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 260px;
`;

const ArticleInfo = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0px 10px 10px;
    width: 100%;
    cursor: pointer;
`;
const ArticleTitle = styled.div`
    display: flex;
    letter-spacing: -1px;
    font-size: 14.5px;
    width: 40%;
    padding-left: 30px;
`;

const ArticleDivide = styled.div`
    width: 55%;
    display: flex;
    justify-content: space-between;
`;

const ArticleAuthor = styled.div`
    display: flex;
    letter-spacing: -1px;
    font-size: 14.5px;
    justify-content: center;
    text-align: left;
`;

const ArticleDate = styled.div`
    display: flex;
    font-size: 14.5px;
    letter-spacing: -1px;
    align-items: flex-end;
    text-align: right;
    padding-right: 50px;
`;

const NoArticle = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    min-height: 260px;
`;
