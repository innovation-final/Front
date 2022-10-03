import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { stockAPI } from '../../shared/api';
import ContentBox from '../elements/ContentBox';
import LoadingSpinner from '../elements/LoadingSpinner';
import { dateParser } from '../../util/parser';

const keys = ['기사제목', '날짜'];

function RelatedArticlesBox({ isPC }) {
    const { id } = useParams();
    const { data, isLoading } = useQuery(['articles', id], () =>
        stockAPI.getStockArticle(id),
    );

    if (isLoading) return <LoadingSpinner />;
    const info = data.data.data;

    return (
        <StyleRelatedArticlesBox isPC={isPC}>
            <Title>관련기사</Title>
            <ContentBox>
                <ArticleWrapper>
                    <TableNames>
                        {keys.map(key => (
                            <TableName key={key}>{key}</TableName>
                        ))}
                    </TableNames>
                    <TableData>
                        {info.map(article => (
                            <ArticleInfo
                                key={article.title}
                                onClick={() =>
                                    window.open(`${article.originallink}`)
                                }
                            >
                                <ArticleTitle>
                                    {article.title.length < 32
                                        ? article.title
                                        : `${article.title.slice(0, 32)} ...`}
                                </ArticleTitle>
                                <ArticleDate>
                                    {dateParser(article.pubDate)}
                                </ArticleDate>
                            </ArticleInfo>
                        ))}
                    </TableData>
                </ArticleWrapper>
            </ContentBox>
        </StyleRelatedArticlesBox>
    );
}

export default RelatedArticlesBox;

const StyleRelatedArticlesBox = styled.div`
    width: ${props => (props.isPC ? '35' : '100')}%;
`;

const Title = styled.div`
    height: 50px;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
`;

const ArticleWrapper = styled.div`
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
`;

const TableName = styled.div``;

const TableData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 280px;
`;

const ArticleInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 5px;
    margin-left: 20px;

    cursor: pointer;
`;
const ArticleTitle = styled.div`
    width: 70%;
    letter-spacing: -1px;
    font-size: 14.5px;
    margin-left: -10px;
`;

const ArticleDate = styled.div`
    width: 25%;
    display: flex;
    font-size: 14.5px;
    letter-spacing: -1px;
    align-items: flex-end;
`;
