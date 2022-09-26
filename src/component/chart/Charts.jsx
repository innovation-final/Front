import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function Charts({ data }) {
    const [options, setOptions] = useState({
        chart: {
            id: '코스피',
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
    });
    const [series, setSeries] = useState([
        {
            name: 'series-1',
            data: data,
        },
    ]);

    return (
        <div>
            {data && (
                <Chart
                    options={options}
                    series={series}
                    type="candlestick"
                    width="500"
                />
            )}
        </div>
    );
}

export default Charts;
