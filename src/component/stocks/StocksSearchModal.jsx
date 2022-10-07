import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../elements/Modal';
import StockSearch from '../elements/StockSearch';
import Button from '../elements/Button';
import { searchState } from '../../atoms/atoms';

function StocksSearchModal({ setIsOpen }) {
    const client = useQueryClient();
    const [inputValue, setInputValue] = useRecoilState(searchState);
    const navigate = useNavigate();
    const stocksQuery = client.getQueryData('stockSearch');
    const stocksData = stocksQuery?.data.data;

    const onClick = () => {
        if (!stocksData) return;
        const stockCode = stocksData?.find(
            stock => stock.name === inputValue,
        ).code;
        navigate(`/stock/${stockCode}`);
        setInputValue('');
    };

    return (
        <Modal height={200} setIsOpen={setIsOpen}>
            <SearchContainer>
                <StockSearch />
            </SearchContainer>
            <ButtonBox>
                <Button _onClick={onClick}>
                    <SearchIcon />
                </Button>
            </ButtonBox>
        </Modal>
    );
}

export default StocksSearchModal;

const SearchContainer = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 80px;
`;
const ButtonBox = styled.div`
    position: absolute;
    z-index: 0;
    right: 30px;
    bottom: 30px;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`;
