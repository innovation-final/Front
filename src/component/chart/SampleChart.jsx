import React, { useState, useEffect } from 'react';
import api from '../../shared/api';
import CandleStickChart from './CandleStickChart';

function SampleChart({ width, height }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await api.get('/stock/010140').then(res => {
                console.log(res.data);
                setData(
                    res.data.stockDetail.map(v => {
                        return {
                            x: v.date,
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
                <CandleStickChart data={data} width={width} height={height} />
            )}
        </div>
    );
}

export default SampleChart;
