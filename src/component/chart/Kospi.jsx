import React, { useState, useEffect } from 'react';
import Charts from './Charts';
import api from '../../shared/api';
import datas from '../../data/data';

function Kospi() {
    const [data, setData] = useState(datas);
    useEffect(() => {
        api.get('/stock/get').then(res => {
            setData(
                res.data.slice(0, 5).map(v => {
                    return {
                        x: new Date(),
                        y: [
                            v.start_price,
                            v.higher_price,
                            v.start_price - v.lower_price,
                            v.current_price,
                        ],
                    };
                }),
            );
        });
    }, []);

    return <div>{data && <Charts data={data} />}</div>;
}

export default Kospi;
