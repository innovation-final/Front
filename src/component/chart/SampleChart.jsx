import React, { useState, useEffect } from 'react';
import api from '../../shared/api';
import LineChart from './LineChart';

function SampleChart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await api.get('/stock/get').then(res => {
                setData(
                    res.data.map(v => {
                        return v.current_price;
                    }),
                );
            });
        }
        fetchData();
    }, []);

    return <div>{data.length > 0 && <LineChart data={data} />}</div>;
}

export default SampleChart;
