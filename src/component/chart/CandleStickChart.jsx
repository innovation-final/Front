import React from 'react';
import Chart from 'react-apexcharts';

function CandleStickChart({ data, width }) {
    const options = {
        chart: {
            id: '코스피',
        },
        xaxis: {
            labels: {
                format: 'dd/MM',
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
                />
            )}
        </div>
    );
}

export default React.memo(CandleStickChart);
