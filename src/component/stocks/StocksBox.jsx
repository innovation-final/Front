import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import SelectBox from '../elements/SelectBox';
import Button from '../elements/Button';
import TableItem from './TableItem';
import TableName from './TableName';
import StocksSearch from './StocksSearchModal';
import LoadingSpinner from '../elements/LoadingSpinner';
import useGetStockRank from '../../hooks/useGetStockRank';

const options = [
    { name: '코스피 거래량', value: 'kospi_vol_extend' },
    { name: '코스피 등락률', value: 'kospi_rate_extend' },
    { name: '코스닥 거래량', value: 'kosdaq_vol_extend' },
    { name: '코스닥 등락률', value: 'kosdaq_rate_extend' },
];
const defaultOption = 'kospi_vol_extend';
const keys = [
    '랭킹',
    '이름',
    '현재가',
    '등락률',
    '저가',
    '고가',
    '거래대금(백만원)',
    '거래량(백만주)',
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

    const { data, isLoading, invalidate } = useGetStockRank(option);

    useEffect(() => {
        invalidate();
    }, [option]);

    return (
        <StyleStocksBox isOpen={open}>
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
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <>
                        {data.map(value => (
                            <TableItem key={value.stockCode} values={value} />
                        ))}
                    </>
                )}
            </StocksContainer>
            {open ? (
                <StocksSearch width={800} height={700} setIsOpen={setIsOpen}>
                    hello
                </StocksSearch>
            ) : null}
        </StyleStocksBox>
    );
}

export default StocksBox;

const StyleStocksBox = styled.div`
    width: 100%;
    margin-left: 2%;
    margin-top: 1%;
    overflow: ${props => (props.isOpen ? 'hidden' : 'visible')};
    height: ${props => (props.isOpen ? '85vh' : '100%')};
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
    margin-top: 10px;
`;
