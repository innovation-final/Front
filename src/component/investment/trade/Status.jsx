import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import Calendar from '../../elements/Calendar';
import SelectBox from '../../elements/SelectBox';
import { dateParser } from '../../../util/parser';
import useGetOrder from '../../../hooks/useGetOrders';
import LoadingSpinner from '../../elements/LoadingSpinner';

const options = [
    { name: '매수', value: 'buy' },
    { name: '매도', value: 'sell' },
];
const defaultOption = 'buy';

const options2 = [
    { name: '체결', value: 'true' },
    { name: '미체결', value: 'false' },
];
const defaultOption2 = 'true';

function Status() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const getCurrentDate = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };

    const [option, setOption] = useState(defaultOption);
    const getOption = selected => {
        setOption(selected);
    };
    const [option2, setOption2] = useState(defaultOption2);
    const getOption2 = selected => {
        setOption2(selected);
    };

    const { data, isLoading, refetch } = useGetOrder(
        dateParser(startDate),
        dateParser(endDate),
        option2,
        option,
    );

    useEffect(() => {
        refetch();
    }, [option, option2, startDate, endDate]);

    function renderData(_data, _isSign, _isBuy) {
        return _data.map(info => (
            <Content key={uuid()}>
                <Item>{info.stockName}</Item>
                <Item>{info.price}</Item>
                <Item>{_isSign === 'true' ? info.price : 0}</Item>
                <Item>{_isSign === 'true' ? '체결' : '미체결'}</Item>
                <Item>{_isBuy === 'buy' ? '매수' : '매도'}</Item>
                <Item>{info.amount}</Item>
                <Item>{_isSign === 'true' ? info.amount : 0}</Item>
                <Item>{info.orderCategory}</Item>
            </Content>
        ));
    }

    return (
        <Container>
            <Wrapper>
                <Calendar getCurrentDate={getCurrentDate} />
                <SelectBox
                    options={options}
                    selectedOption={option}
                    _getOption={getOption}
                />
                <SelectBox
                    options={options2}
                    selectedOption={option2}
                    _getOption={getOption2}
                />
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
                    <Item>주문구분</Item>
                </Table>
            </Header>
            <Contents>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    renderData(data, option2, option)
                )}
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
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    margin-bottom: 10px;
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
    margin-bottom: 10px;
    border: 1px solid ${props => props.theme.secondaryColor};
    border-radius: 15px;
    padding: 5px 0px;
    overflow: scroll;
`;
