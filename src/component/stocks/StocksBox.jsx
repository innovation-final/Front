import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import SelectBox from '../elements/SelectBox';
import Button from '../elements/Button';
import TableItem from './TableItem';
import TableName from './TableName';
import Modal from '../elements/Modal';
import LoadingSpinner from '../elements/LoadingSpinner';
import { stockAPI } from '../../shared/api';

const options = ['코스피', '코스닥'];
const defaultOption = '코스피';
const keys = [
    '랭킹',
    '이름',
    '현재가',
    '등락률',
    '저가',
    '고가',
    '거래대금(백만원)',
    '거래량(백만원)',
];

function StocksBox() {
    const [option, setOption] = useState(defaultOption);
    const getOption = selected => {
        setOption(selected);
    };

    const [open, isOpen] = useState(false);
    const setIsOpen = () => {
        isOpen(props => !props);
    };

    const { data, isLoading } = useQuery('stocks', () =>
        stockAPI.getStocks('kospi_vol_extend'),
    );

    if (isLoading) return <LoadingSpinner />;

    const values = data.data.data;
    return (
        <StyleStocksBox>
            <StyleHeader>
                <Title>주식전체</Title>
                <SelectBox
                    options={options}
                    selectedOption={option}
                    _getOption={getOption}
                />
                <SearchBox>
                    <Button _onClick={setIsOpen}>
                        <SearchIcon />
                    </Button>
                </SearchBox>
            </StyleHeader>
            <StocksContainer>
                <TableName keys={keys} />
                {values.map(value => (
                    <TableItem key={value.stockCode} values={value} />
                ))}
            </StocksContainer>
            {open ? (
                <Modal width={800} height={700} setIsOpen={setIsOpen}>
                    hello
                </Modal>
            ) : null}
        </StyleStocksBox>
    );
}

export default StocksBox;

const StyleStocksBox = styled.div`
    width: 100%;
    margin-left: 2%;
    margin-top: 1%;
`;
const StyleHeader = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    margin-bottom: 20px;
`;
const Title = styled.div`
    font-size: 25px;
    margin-right: 30px;
`;
const StocksContainer = styled.div`
    width: 90%;
    border-radius: 10px;
    padding: 30px;
`;
const SearchBox = styled.div`
    margin-left: 20px;
`;
