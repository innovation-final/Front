import React from 'react';
// import styled from 'styled-components';
import LoadingSpinner from '../elements/LoadingSpinner';
import InterestChartList from './InterestChartList';

function InterestChart({ code }) {
    if (isLoading) return <LoadingSpinner />;

    const { data, isLoading } = useGetStockInfo(code);
    const interestChart = data && data;
    console.log(interestChart);

    return (
        <div>
            {interestChart &&
                interestChart.map(interestCharts => (
                    <InterestChartList
                        key={interestCharts.title}
                        chart={interestCharts}
                    />
                ))}
        </div>
    );
}

export default InterestChart;
