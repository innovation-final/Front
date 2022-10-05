import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
import api from '../../shared/api';
import styled from 'styled-components';

function StockIndex({ name, width }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await api.get(`/stock/index/${name}`).then(res => {
                setData(
                    res.data.body.data.map(v => {
                        return {
                            x: v[0],
                            y: v[1],
                        };
                    }),
                );
            });
        }
        fetchData();
    }, []);

    return (
        <Div>
            {data.length > 0 && (
                <LineChart data={data} width={width} name={name} />
            )}
        </Div>
    );
}

export default StockIndex;

const Div = styled.div``;
