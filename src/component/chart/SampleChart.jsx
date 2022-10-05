import React, { useState, useEffect } from 'react';
import api from '../../shared/api';
import CandleStickChart from './CandleStickChart';

function SampleChart({ name, width, height }) {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState({});
    useEffect(() => {
        async function fetchData() {
            await api.get('/stock/010140').then(res => {
                const date = res.data.stockDetail.date.split('-');
                const month = date[2];
                console.log(res.data);
                setCurrent(res.data.current);
                setData(
                    res.data.stockDetail.map(v => {
                        return {
                            x: new Date(v.date[0], v.date[1] - 1, v.date[2]),
                            y: [v.open, v.high, v.low, v.close],
                        };
                    }),
                );
            });
        }
        fetchData();
    }, []);

    return (
        <div>
            {data.length > 0 && (
                <CandleStickChart
                    data={data}
                    current={current}
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
}

export default SampleChart;
