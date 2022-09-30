import React from 'react';
import Chart from 'react-apexcharts';

function LineChart({ data, width }) {
    const options = {
        chart: {
            id: '코스피',
        },
        xaxis: {},
    };
    const series = [
        {
            name: 'series-1',
            data,
        },
    ];

    return (
        <Chart
            options={options}
            series={series}
            type="candlestick"
            width={width}
        />
    );
}

export default LineChart;
