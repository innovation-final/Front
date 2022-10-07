import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../shared/api';
import CandleStickChart from './CandleStickChart';

function SampleChart({ name, width, height, code }) {
    const [data, setData] = useState([]);
    console.log(code);
    useEffect(() => {
        async function fetchData() {
            await api.get(`/stock/${code}`).then(res => {
                setData(
                    res.data.data.stockDetail.map(v => {
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
        <Div>
            <h1>{name}</h1>
            {data.length > 0 && (
                <DivChart>
                    <CandleStickChart
                        data={data}
                        width={width * 0.9}
                        height={height * 0.8}
                    />
                </DivChart>
            )}
        </Div>
    );
}

export default SampleChart;

const Div = styled.div``;

const DivChart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
