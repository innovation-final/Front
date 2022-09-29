import React, { useState, useEffect } from 'react';
import CandleStickChart from './CandleStickChart';
import api from '../../shared/api';

function Kospi({ width }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await api.get('/stock/005930').then(res => {
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

    return (
        <>{data.length > 0 && <CandleStickChart data={data} width={width} />}</>
    );
}

export default Kospi;
