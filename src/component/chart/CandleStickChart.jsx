import React from 'react';
import Chart from 'react-apexcharts';

function CandleStickChart({ data, width, height }) {
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
        <div>
            {data && (
                <Chart
                    options={options}
                    series={series}
                    type="candlestick"
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
}

export default React.memo(CandleStickChart);
