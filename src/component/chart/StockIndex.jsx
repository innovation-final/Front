import React, { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';
import dayjs from 'dayjs';
import api from '../../shared/api';
import LoadingSpinner from '../elements/LoadingSpinner';

function ChartAreaIndex({ name, width, height }) {
    const [isLoading, setIsLoading] = useState(true);
    const [series, setData] = useState([]);

    useEffect(() => {
        const getValueData = async () => {
            const newValue = [];
            const reqData = await api.get(`/stock/index/${name}`);
            const resData = reqData.data.data.map(v => {
                return {
                    x: v[0],
                    y: v[1],
                };
            });
            for (let i = 0; i < resData.length; i += 1) {
                newValue.push(resData[i]);
            }
            setData(newValue);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };
        setTimeout(() => {
            getValueData();
        }, 1);
    }, []);
    return (
        <Wrapper>
            {isLoading ? (
                <LoadingContainer>
                    <LoadingSpinner />
                </LoadingContainer>
            ) : (
                <ChartContainer>
                    <ApexChart
                        type="area"
                        series={series && [{ data: series }]}
                        options={{
                            title: {
                                text: name === 'kospi' ? '코스피' : '코스닥',
                                style: {
                                    fontSize: '17px',
                                    fontWeight: 'bold',
                                    fontFamily: 'Pretendard-Regular',
                                },
                            },
                            tickPlacement: 'between',
                            chart: {
                                toolbar: {
                                    show: false,
                                },
                                zoom: {
                                    enabled: false,
                                },
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            stroke: {
                                curve: 'smooth',
                            },
                            xaxis: {
                                type: 'category',
                                tickAmount: 10,
                                labels: {
                                    formatter: function (val) {
                                        return dayjs(val).format('YYYY');
                                    },
                                    rotate: 0,
                                },
                            },
                            noData: {
                                text: 'Loading..',
                            },
                        }}
                        width={width}
                        height={height}
                    />
                </ChartContainer>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const LoadingContainer = styled.div`
    height: 100%;
    min-height: 375px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChartContainer = styled.div`
    padding: 30px;
    width: 100%;
`;

export default React.memo(ChartAreaIndex);
