import React from 'react';
import ReactApexChart from 'react-apexcharts';

function LineChart({ name, data, width, height }) {
    const series = [
        {
            name: { name },
            data,
        },
    ];
    const options = {
        tickPlacement: 'between',
        chart: {
            id: name === 'kospi' ? '코스피' : '코스닥',
        },
        height: 350,
        zoom: {
            enabled: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
        },
        xaxis: {
            labels: {
                show: true,
            },
            tickAmount: 20,
        },
        noData: {
            text: 'Loading..',
        },
    };

    return (
        <ReactApexChart
            type="area"
            options={options}
            series={series}
            width={width}
            height={height}
        />
    );
}

export default React.memo(LineChart);
