import React from 'react';
import Chart from 'react-apexcharts';

function LineChart({ data, width, height }) {
    const options = {
        chart: {
            id: '코스피',
        },
        xaxis: {
            labels: {
                show: false,
            },
        },
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
            type="line"
            width={width}
            height={height}
        />
    );
}

export default LineChart;
