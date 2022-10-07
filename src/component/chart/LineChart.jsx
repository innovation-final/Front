import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';

function LineChart({ name, data, width, height }) {
    const options = {
        colors: ['#546E7A', '#E91E63'],
        tickPlacement: 'between',
        chart: {
            id: name === 'kospi' ? '코스피' : '코스닥',
        },
        xaxis: {
            labels: {
                show: true,
            },
        },
    };
    const series = [
        {
            name: { name },
            data: data,
        },
    ];

    return (
        <ReactApexChart
            options={options}
            series={series}
            type="line"
            width={width}
            height={height}
        />
    );
}

export default React.memo(LineChart);
