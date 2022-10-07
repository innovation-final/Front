import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import api from '../../shared/api';
import styled from 'styled-components';

function StockIndex({ name, width, height }) {
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
                <LineChart
                    data={data}
                    width={width}
                    height={height}
                    name={name}
                />
            )}
        </Div>
    );
}

export default StockIndex;

const Div = styled.div`
    height: max-content;
`;
