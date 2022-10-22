import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';
import api from '../../shared/api';

function StockIndex({ name, width }) {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await api.get(`/stock/index/${name}`).then(res => {
                setData(
                    res.data.data.map(v => {
                        return {
                            x: v[0],
                            y: v[1],
                        };
                    }),
                );
            });
        }

        async function fetchIndex() {
            await api.get(`/stock/index/main/${name}`).then(res => {
                setIndex(res.data.data);
            });
        }

        fetchIndex();
        fetchData();
    }, []);

    return (
        <Div>
            <h1>
                {name === 'kospi' ? '코스피' : '코스닥'} : {index}
            </h1>
            {data.length > 0 && (
                <LineChart data={data} width={width} height={350} name={name} />
            )}
        </Div>
    );
}

export default StockIndex;

const Div = styled.div`
    height: max-content;
`;
