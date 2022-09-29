import React from 'react';
import Chart from 'react-apexcharts';

function LineChart({ data }) {
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

    return <Chart options={options} series={series} type="line" width="400" />;
}

export default LineChart;
