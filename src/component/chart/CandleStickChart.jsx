import React from 'react';
import Chart from 'react-apexcharts';

function CandleStickChart({ name, data, width, height }) {
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
            name: { name },
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
