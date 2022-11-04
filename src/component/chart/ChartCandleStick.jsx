import React, { useEffect, useState } from 'react';
import ApexChart from 'react-apexcharts';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useRecoilValue } from 'recoil';
import api from '../../shared/api';
import LoadingSpinner from '../elements/LoadingSpinner';
import { isDarkState } from '../../atoms/common/commonState';

function ChartCandleStick({ name, width, code, height }) {
    const isDark = useRecoilValue(isDarkState);
    const [isLoading, setIsLoading] = useState(true);
    const [series, setData] = useState([]);

    useEffect(() => {
        const getValueData = async () => {
            const newValue = [];
            const reqData = await api.get(`/stock/${code}`);
            const resData = reqData.data.data.stockDetail.slice(-30).map(v => {
                return {
                    x: v.date,
                    y: [v.open, v.high, v.low, v.close],
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
                        type="candlestick"
                        series={
                            series && [
                                {
                                    data: series,
                                },
                            ]
                        }
                        options={{
                            theme: {
                                mode: isDark === 'darkMode' ? 'dark' : 'light',
                            },
                            title: {
                                text: name,
                                style: {
                                    fontSize: '17px',
                                    fontWeight: 'bold',
                                    fontFamily: 'Pretendard-Regular',
                                },
                            },
                            chart: {
                                toolbar: {
                                    show: false,
                                },
                                zoom: {
                                    enabled: false,
                                },
                                background: 'transparent',
                            },
                            events: {
                                mounted: chart => {
                                    chart.windowResizeHandler();
                                },
                            },
                            xaxis: {
                                type: 'category',
                                tickAmount: 10,
                                labels: {
                                    formatter: function (val) {
                                        return dayjs(val).format('MM/DD');
                                    },
                                    rotate: 0,
                                },
                            },
                            noData: {
                                text: 'Loading..',
                            },
                            plotOptions: {
                                candlestick: {
                                    colors: {
                                        downward: '#4c5fca',
                                        upward: '#EF403C',
                                    },
                                },
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
    min-width: 1165px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChartContainer = styled.div`
    padding: 30px;
    width: 100%;
`;

export default React.memo(ChartCandleStick);
