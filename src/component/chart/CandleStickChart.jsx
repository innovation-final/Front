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
            data: data,
        },
    ];

    console.log(data);
    return (
        <div>
            {data && (
                <Chart
                    options={options}
                    series={series}
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
}

export default React.memo(CandleStickChart);
