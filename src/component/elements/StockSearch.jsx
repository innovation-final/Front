import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { stockAPI } from '../../shared/api';
import { searchState } from '../../atoms/search/searchState';

function StockSearch() {
    const { data } = useQuery('stockSearch', () => stockAPI.getStockSearch());

    const stockNames = data?.data.data;
    const stock = stockNames;
    const stocksNameArray =
        stock &&
        stock.map(stocks => {
            return stocks.name;
        });

    const wholeTextArray = stocksNameArray;
    // 종목

    const [inputValue, setInputValue] = useRecoilState(searchState);
    const [isHaveInputValue, setIsHaveInputValue] = useState(false);
    const [dropDownList, setDropDownList] = useState(wholeTextArray);
    const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

    // const pickOne = stock?.filter(el => el.name === inputValue);
    // console.log(pickOne);

    const showDropDownList = () => {
        if (inputValue === '') {
            setIsHaveInputValue(false);
            setDropDownList([]);
        } else {
            const choosenTextList = wholeTextArray?.filter(textItem =>
                textItem.includes(inputValue),
            );
            setDropDownList(choosenTextList);
        }
    };

    const changeInputValue = event => {
        setInputValue(event.target.value);
        setIsHaveInputValue(true);
    };

    const clickDropDownItem = clickedItem => {
        setInputValue(clickedItem);
        setIsHaveInputValue(false);
    };

    const handleDropDownKey = event => {
        // input에 값이 있을때만 작동
        if (isHaveInputValue) {
            if (
                event.key === 'ArrowDown' &&
                dropDownList.length - 1 > dropDownItemIndex
            ) {
                setDropDownItemIndex(dropDownItemIndex + 1);
            }

            if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
                setDropDownItemIndex(dropDownItemIndex - 1);
            if (event.key === 'Enter' && dropDownItemIndex >= 0) {
                clickDropDownItem(dropDownList[dropDownItemIndex]);
                setDropDownItemIndex(-1);
            }
        }
    };
    useEffect(showDropDownList, [inputValue]);
    return (
        <WholeBox>
            <StockInputLayout>
                <InputBox isHaveInputValue={isHaveInputValue}>
                    <StockInput
                        type="text"
                        placeholder="검색"
                        value={inputValue}
                        onChange={changeInputValue}
                        onKeyUp={handleDropDownKey}
                    />
                    <DeleteButton onClick={() => setInputValue('')}>
                        &times;
                    </DeleteButton>
                </InputBox>
            </StockInputLayout>
            <DropDownWrapper>
                <StockDropInputLayout>
                    {isHaveInputValue && (
                        <DropDownBox>
                            {dropDownList && dropDownList.length === 0 && (
                                <DropDownItem>
                                    해당하는 단어가 없습니다
                                </DropDownItem>
                            )}
                            {dropDownList &&
                                dropDownList.map(
                                    (dropDownItem, dropDownIndex) => {
                                        return (
                                            <DropDownItem
                                                key={uuidv4()}
                                                dropDownList={dropDownIndex}
                                                onClick={() =>
                                                    clickDropDownItem(
                                                        dropDownItem,
                                                    )
                                                }
                                                onMouseOver={() =>
                                                    setDropDownItemIndex(
                                                        dropDownIndex,
                                                    )
                                                }
                                                className={
                                                    dropDownItemIndex ===
                                                    dropDownIndex
                                                        ? 'selected'
                                                        : ''
                                                }
                                            >
                                                {dropDownItem}
                                            </DropDownItem>
                                        );
                                    },
                                )}
                        </DropDownBox>
                    )}
                </StockDropInputLayout>
            </DropDownWrapper>
        </WholeBox>
    );
}

export default StockSearch;
const activeBorderRadius = '16px 16px 0 0';
const inactiveBorderRadius = '16px 16px 16px 16px';

const WholeBox = styled.div`
    width: 100%;
    position: relative;
`;

// const WriteText = styled.div`
//     margin-top: 10px;
// `;

const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
    width: 100%;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.inputColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: ${props =>
        props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
    z-index: 3;

    &:focus-within {
        box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
        outline: 1px solid ${props => props.theme.hoverColor};
    }
`;
const StockInputLayout = styled.div`
    width: 100%;
    display: flex;
`;
const StockDropInputLayout = styled.div`
    width: 100%;
    justify-content: center;
`;

const StockInput = styled.input`
    flex: 1 0 0;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: transparent;
    color: ${props => props.theme.textColor};
    border: none;
    outline: none;
`;

const DeleteButton = styled.div`
    cursor: pointer;
`;

const DropDownWrapper = styled.div`
    width: 100%;
`;

const DropDownBox = styled.ul`
    display: block;
    position: absolute;
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.inputColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-top: none;
    border-radius: 0 0 16px 16px;
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
    list-style-type: none;
    max-height: 20rem;
    overflow: scroll;
    z-index: 999;
`;

const DropDownItem = styled.li`
    padding: 15px;
    &.selected {
        color: #10a3ff;
    }
`;
