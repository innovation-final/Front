import React from 'react';
import ReactApexChart from 'react-apexcharts';

function BarChart({ name, data, width, height }) {
    const options = {
        chart: {
            height: height,
            type: 'bar',
            brush: {
                enabled: true,
                target: 'candles',
            },
            fill: {
                color: '#ccc',
                opacity: 0.4,
            },
            stroke: {
                color: '#0D47A1',
            },
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
                colors: {
                    ranges: [
                        {
                            from: -1000,
                            to: 0,
                            color: '#F15B46',
                        },
                        {
                            from: 1,
                            to: 10000,
                            color: '#FEB019',
                        },
                    ],
                },
            },
        },
        colors: ['#546E7A', '#E91E63'],
        tickPlacement: 'between',
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
            type="bar"
            width={width}
            height={height}
        />
    );
}

export default BarChart;
