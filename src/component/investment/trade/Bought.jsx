import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import currentStockCode from '../../../atoms/investment/stockState';
import useInvestmentBuy from '../../../hooks/useInvestmentBuy';
import useGetStockInfo from '../../../hooks/useGetStockInfo';
import { esUSNumberParser } from '../../../util/parser';

function Bought() {
    // const client = useQueryClient();
    const [isMarket, setIsMarket] = useState(false);
    const stockCode = useRecoilValue(currentStockCode);

    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const qunatityRef = useRef(null);
    const [price, setPrice] = useState(0);
    const priceRef = useRef(null);

    const { selectPriceBuyMutation } = useInvestmentBuy(stockCode);
    const currentStockInfo = useGetStockInfo(stockCode);

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
        if (!isMarket) {
            setPrice(currentStockInfo?.data?.current?.close);
            /* eslint-disable no-param-reassign */
            priceRef.current.disabled = true;
        } else {
            priceRef.current.disabled = false;
        }
    };
    const onSubmit = event => {
        event.preventDefault();
        if (!total) {
            return;
        }
        Swal.fire({
            title: '매수하시겠습니까?',
            text:
                `${currentStockInfo?.data?.name}을(를) ${quantity}주 매수합니다.` +
                `\n` +
                `(주문총액 : ${total}KRW)`,
            imageUrl:
                'https://velog.velcdn.com/images/soonger3306/post/1f89fb6c-f5b6-47b1-9788-4bc6faa6875a/image.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            cancelButtonColor: '#ff6026',
            confirmButtonColor: '#3085d6',
            confirmButtonText: '매수하기',
            cancelButtonText: '취소하기',
            reverseButtons: true,
        }).then(result => {
            if (result.isConfirmed) {
                selectPriceBuyMutation.mutate({
                    stockName: currentStockInfo?.data?.name,
                    amount: quantity,
                    orderCategory: isMarket ? '시장가' : '지정가',
                    price,
                });
                Swal.fire('매수하였습니다.');
                setQuantity(0);
                setPrice(0);
                setIsMarket(false);
                /* eslint-disable no-param-reassign */
                priceRef.current.disabled = true;
            } else {
                Swal.fire('취소하였습니다.');
            }
        });
    };

    useEffect(() => {
        setIsMarket(false);
        /* eslint-disable no-param-reassign */
        priceRef.current.disabled = false;
    }, [stockCode]);

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
                <View>{`${esUSNumberParser(Number(quantity))} 주`}</View>
            </InputBox>
            <InputBox>
                <div>매수가격</div>
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
                <View>{`${esUSNumberParser(Number(price))} KRW`}</View>
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
                <View>{`${esUSNumberParser(Number(total))} KRW`}</View>
            </InputBox>
            <Button type="submit" value="매수하기" />
        </StyleBought>
    );
}

export default Bought;

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
        margin-left: 20px;
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
    justify-content: flex-end;
    align-items: center;
    width: 60%;

    label {
        [type='radio'] {
            appearance: none;
            border: max(2px, 0.1em) solid gray;
            border-radius: 50%;
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

const View = styled.span`
    position: absolute;
    right: 1rem;
    bottom: -1.3rem;
    font-size: 15px;
    color: black;
`;

const Button = styled.input`
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${props => props.theme.buttonColor};
    border-radius: 15px;
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.bgColor};
    &:hover {
        background-color: ${props => props.theme.hoverBorderColor};
    }
`;
