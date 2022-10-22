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
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
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
