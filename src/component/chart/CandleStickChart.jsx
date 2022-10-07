import React from 'react';
import ReactApexChart from 'react-apexcharts';

function CandleStickChart({ name, data, width, height }) {
    const options = {
        chart: {
            id: '코스피',
        },
        xaxis: {
            labels: {
                show: true,
            },
        },
    };
    const series = [
        {
            data: data,
        },
    ];

    return (
        <div>
            {data && (
                <ReactApexChart
                    options={options}
                    series={series}
                    width={width}
                    height={height * 0.85}
                />
            )}
        </div>
    );
}

export default React.memo(CandleStickChart);
