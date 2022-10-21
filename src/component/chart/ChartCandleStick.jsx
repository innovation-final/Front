import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ApexChart from 'react-apexcharts';
import api from '../../shared/api';
import LoadingSpinner from '../elements/LoadingSpinner';

function ChartCandleStick({ code, width, height, name }) {
    const [series, setSeries] = useState([]);
    const { isLoading, data } = useQuery(['stockData', code], () =>
        api.get(`/stock/${code}`),
    );
    const yearData = data?.data?.data.stockDetail.slice(-90, -1);
    useEffect(() => {
        setSeries(
            yearData &&
                yearData.map(v => {
                    return {
                        x: v.date,
                        y: [v.open, v.high, v.low, v.close],
                    };
                }),
        );
    }, [yearData]);
    console.log(series);
    console.log(width, height, name, series);
    return (
        <div>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <ApexChart
                    type="candlestick"
                    series={[{ data: data?.data?.data.stockDetail }]}
                />
            )}
        </div>
    );
}

export default ChartCandleStick;
