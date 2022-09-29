import React, { useState, useEffect } from 'react';
import api from '../../shared/api';
import CandleStickChart from './CandleStickChart';

function SampleChart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await api.get('/stock/010140').then(res => {
                setData(
                    res.data.data.slice(1).map(v => {
                        return {
                            x: new Date(),
                            y: [v.open, v.high, v.low, v.close],
                        };
                    }),
                );
            });
        }
        fetchData();
    }, []);

    return <div>{data.length > 0 && <CandleStickChart data={data} />}</div>;
}

export default SampleChart;
