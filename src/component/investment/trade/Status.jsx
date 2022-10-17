import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import api from '../../../shared/api';
import Calendar from '../../elements/Calendar';

function Status() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const getCurrentDate = date => {
        setCurrentDate(date);
    };

    const { data } = useQuery('mystock', () => api.get('/auth/buy'));
    console.log(data);
    console.log(currentDate);

    return (
        <Container>
            <Wrapper>
                <Calendar getCurrentDate={getCurrentDate} />
            </Wrapper>
            <Header>
                <Table>
                    <Item>종목명</Item>
                    <Item>주문단가</Item>
                    <Item>체결금액</Item>
                    <Item>구분</Item>
                    <Item>매매구분</Item>
                    <Item>주문수량</Item>
                    <Item>체결수량</Item>
                    <Item>미체결수량</Item>
                </Table>
            </Header>
            <Contents>
                <Content>
                    <Item>삼성전자</Item>
                    <Item>67,000</Item>
                    <Item>0</Item>
                    <Item>미체결</Item>
                    <Item>매수</Item>
                    <Item>10</Item>
                    <Item>0</Item>
                    <Item>10</Item>
                </Content>
            </Contents>
        </Container>
    );
}

export default Status;

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
`;
const Wrapper = styled.div`
    margin-bottom: 10px;
    padding: 5px 0px;
`;

const Header = styled.div`
    margin-bottom: 20px;
`;
const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.secondaryColor};
    padding: 5px;
    border-radius: 15px;
`;
const Item = styled.div`
    text-align: center;
    padding: 5px;
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    justify-content: center;
    align-items: center;
`;
