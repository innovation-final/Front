import React from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';

function CandleStickChart({ data: fake, width, height }) {
    const data = fake && fake.slice(-90);
    const options = {
        chart: {
            id: '코스피',
            toolbar: {
                show: true,
            },
        },
        xaxis: {
            type: 'numeric',
            tickAmount: 20,
            format: 'yyyy-MM-dd',
            labels: {
                function(val) {
                    return dayjs(val).format('MMM DD');
                },
            },
        },
    };
    const series = [
        {
            data,
        },
    ];

    return (
        <div>
            {data && (
                <ReactApexChart
                    type="candlestick"
                    options={options}
                    series={series}
                    width={width}
                    height={height * 0.8}
                />
            )}
        </div>
    );
}

export default React.memo(CandleStickChart);
