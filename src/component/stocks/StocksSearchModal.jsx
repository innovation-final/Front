import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../elements/Modal';
import StockSearch from '../elements/StockSearch';
import Button from '../elements/Button';
import { searchState } from '../../atoms/atoms';
import stockData from '../../data/stockData';

function StocksSearchModal({ setIsOpen }) {
    const inputValue = useRecoilValue(searchState);
    const navigate = useNavigate();
    const onClick = () => {
        if (!stockData[inputValue]) return;
        navigate(`/stock/${stockData[inputValue].code}`);
    };

    return (
        <Modal height={200} setIsOpen={setIsOpen}>
            <SearchContainer>
                <StockSearch />
                <ButtonBox>
                    <Button _onClick={onClick}>
                        <SearchIcon />
                    </Button>
                </ButtonBox>
            </SearchContainer>
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
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
`;
