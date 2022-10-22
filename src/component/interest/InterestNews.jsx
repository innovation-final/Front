import React from 'react';
// import styled from 'styled-components';
import { useQuery } from 'react-query';
import { stockAPI } from '../../shared/api';
import InterestNewsList from './InterestNewsList';
import LoadingSpinner from '../elements/LoadingSpinner';

function InterestNews({ code }) {
    const { data, isLoading } = useQuery(
        ['stocknews', code],
        () => stockAPI.likeNewsStock(code),
        {
            enabled: code !== '',
        },
    );
    if (isLoading) return <LoadingSpinner />;

    const interestnews = data?.data.data;
    return (
        <div>
            {interestnews &&
                interestnews.map(interestStocks => (
                    <InterestNewsList
                        key={interestStocks.title}
                        news={interestStocks}
                    />
                ))}
        </div>
    );
}

export default InterestNews;
