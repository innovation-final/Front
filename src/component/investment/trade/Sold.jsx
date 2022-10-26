import React, { useState, useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import currentStockCode from '../../../atoms/investment/stockState';
import useInvestmentSell from '../../../hooks/useInvestmentSell';
import useGetStockInfo from '../../../hooks/useGetStockInfo';
import { esUSNumberParser } from '../../../util/parser';

function Sold() {
    const [isMarket, setIsMarket] = useState(false);
    const stockCode = useRecoilValue(currentStockCode);

    const [total, setTotal] = useState(0);

    const [quantity, setQuantity] = useState(0);
    const qunatityRef = useRef(null);

    const [price, setPrice] = useState(0);
    const priceRef = useRef(null);

    const { selectPriceSellMutation } = useInvestmentSell(stockCode);
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
            title: '매도하시겠습니까?',
            text:
                `${currentStockInfo?.data?.name}을(를) ${quantity}주 매도합니다.` +
                `\n` +
                `(주문총액 : ${total}KRW)`,
            imageUrl:
                'https://velog.velcdn.com/images/soonger3306/post/c9fc9802-cc28-4aaf-9951-8c0bdc06b812/image.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            cancelButtonColor: '#ff6026',
            confirmButtonColor: '#3085d6',
            confirmButtonText: '매도하기',
            cancelButtonText: '취소하기',
            reverseButtons: true,
        }).then(result => {
            if (result.isConfirmed) {
                selectPriceSellMutation.mutate(
                    {
                        stockName: currentStockInfo?.data?.name,
                        amount: quantity,
                        orderCategory: isMarket ? '시장가' : '지정가',
                        price,
                    },
                    {
                        onError: error => {
                            if (error.response.status === 400) {
                                Swal.fire('주문 수량을 확인해주세요.');
                                return;
                            }
                            if (
                                error.response.data.error.code ===
                                'OUT_OF_MARKET_HOUR'
                            ) {
                                Swal.fire(
                                    '장마감입니다. / 장시간 (09:00~21:00)',
                                );
                                return;
                            } else {
                                Swal.fire('서버 오류입니다.');
                                return;
                            }
                        },
                        onSuccess: () => {
                            Swal.fire('매도하였습니다.');
                        },

                        onSettled: () => {
                            setQuantity(0);
                            setPrice(0);
                            setIsMarket(false);
                        },
                    },
                );

                Swal.fire('매도하였습니다.');
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
                    min="0"
                    max="100"
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
                <div>매도가격</div>
                <Input
                    type="number"
                    min="0"
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
        margin-left: 20px;
        white-space: nowrap;
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
    div {
        font-size: 0.8vw;
        white-space: nowrap;
        font-weight: bold;
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
    width: 50%;

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
    color: ${props => props.theme.textColor};
`;

const Button = styled.input`
    padding: 1rem;
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid ${props => props.theme.secondaryColor};
    border-radius: 15px;
    background-color: ${props => props.theme.secondaryColor};
    color: white;
    &:hover {
        background-color: ${props => props.theme.hoverSecondaryColor};
    }
`;
