import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function Sold() {
    const [isMarket, setIsMarket] = useState(false);

    const [total, setTotal] = useState(0);

    const [quantity, setQuantity] = useState(0);
    const qunatityRef = useRef(null);

    const [price, setPrice] = useState(0);
    const priceRef = useRef(null);

    useEffect(() => {
        setTotal(quantity * price);
    }, [quantity, price]);

    const onChange = (event, setFunction) => {
        setFunction(Number(event.target.value.replace(/(^0+)/, '')));
    };
    const onBlur = (event, setFunction, ref) => {
        setFunction(Number(event.target.value.replace(/(^0+)/, '')));
        /* eslint-disable no-param-reassign */
        ref.current.value = Number(event.target.value.replace(/(^0+)/, ''));
    };

    const onCheck = () => {
        setIsMarket(props => !props);
    };

    const onSubmit = event => {
        const data = { isMarket, quantity, price, total };
        event.preventDefault();
        console.log(data);
    };

    return (
        <StyleBought onSubmit={onSubmit}>
            <InputBox>
                <div>주문구분</div>
                <Radios>
                    <label htmlFor="selected">
                        <input
                            type="radio"
                            value={false}
                            checked={isMarket !== true}
                            onChange={onCheck}
                            id="selected"
                        />
                        지정가
                    </label>
                    <label htmlFor="market">
                        <input
                            type="radio"
                            value
                            checked={isMarket === true}
                            onChange={onCheck}
                            id="market"
                        />
                        시장가
                    </label>
                </Radios>
            </InputBox>
            <InputBox>
                <div>주문수량</div>
                <Input
                    type="number"
                    value={Number(quantity)}
                    onChange={event => onChange(event, setQuantity)}
                    onBlur={event => onBlur(event, setQuantity, qunatityRef)}
                    id="quantity"
                    dir="rtl"
                    ref={qunatityRef}
                />
                <Unit>주</Unit>
            </InputBox>
            <InputBox>
                <div>매도가격</div>
                <Input
                    type="number"
                    value={Number(price)}
                    onChange={event => onChange(event, setPrice)}
                    onBlur={event => onBlur(event, setPrice, priceRef)}
                    id="price"
                    dir="rtl"
                    ref={priceRef}
                />
                <Unit>KRW</Unit>
            </InputBox>
            <InputBox>
                <div>주문총액</div>
                <Input
                    type="number"
                    id="total"
                    value={total}
                    dir="rtl"
                    readOnly
                />
                <Unit>KRW</Unit>
            </InputBox>
            <InputBox>
                <label htmlFor="selected">
                    주문가능/매도가능
                    <input type="checkbox" value id="selected" />
                </label>
            </InputBox>
            <Button type="submit" value="매도하기" />
        </StyleBought>
    );
}

export default Sold;

const StyleBought = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const InputBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    align-items: center;
    position: relative;
    label {
        [type='radio'] {
            appearance: none;
            border: max(2px, 0.1em) solid gray;
            border-radius: 50%;
            width: 1.2em;
            height: 1.2em;
            transition: all ease-in-out 0.1s;
            margin: 0px 10px;
            padding-top: 3px;
        }
        [type='radio']:checked {
            border: 0.4em solid ${props => props.theme.buttonColor};
        }
    }
`;
const Radios = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    label {
        [type='radio'] {
            appearance: none;
            border: max(2px, 0.1em) solid gray;
            border-radius: 50%;
            width: 1.2em;
            height: 1.2em;
            transition: all ease-in-out 0.1s;
            margin: 0px 10px;
        }
        [type='radio']:checked {
            border: 0.4em solid ${props => props.theme.buttonColor};
        }
    }
`;

const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid ${props => props.theme.buttonColor};
    border-radius: 5px;
    padding-right: 3rem;

    &:focus {
        outline: 2px solid ${props => props.theme.buttonColor};
    }
`;

const Unit = styled.span`
    position: absolute;
    right: 1rem;
    letter-spacing: -1px;
    font-size: 13px;
    color: black;
`;

const Button = styled.input`
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${props => props.theme.buttonColor};
    border-radius: 15px;
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.bgColor};
`;
