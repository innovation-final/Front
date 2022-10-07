import BarChart from '@mui/icons-material/BarChart';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../shared/api';
import CandleStickChart from './CandleStickChart';

function SampleChart({ name, width, height }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await api.get('/stock/010140').then(res => {
                setData(
                    res.data.data.stockDetail.map(v => {
                        const date = v.date.split('-');
                        return [
                            {
                                x: new Date(date[0], date[1] - 1, date[2]),
                                y: [v.open, v.high, v.low, v.close],
                            },
                            {
                                x: new Date(date[0], date[1] - 1, date[2]),
                                y: [v.volume],
                            },
                        ];
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
                        data={data[0]}
                        width={width ?? 400}
                        height={height * 0.8 ?? 400}
                    />
                    {/* <BarChart
                        data={data[1]}
                        width={width / 2}
                        height={height}
                    /> */}
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
    justify-content: space-between;
    align-items: center;
`;
