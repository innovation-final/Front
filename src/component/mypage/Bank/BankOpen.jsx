import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
    seedMoneyState,
    openTargetState,
    openExpireAtState,
} from '../../../atoms/account/accountState';

function BankOpen() {
    const seedMoneyList = [
        { value: 5000000, name: ` 500 만원` },
        { value: 10000000, name: ` 1000 만원` },
        { value: 25000000, name: ` 2500 만원` },
        { value: 50000000, name: ` 5000 만원` },
    ];
    const openExpireAtList = [
        { value: 30, name: '30일' },
        { value: 60, name: '60일' },
        { value: 90, name: '90일' },
        { value: 180, name: '180일' },
    ];
    // eslint-disable-next-line no-unused-vars
    const [seedMoney, setSeedMoney] = useRecoilState(seedMoneyState);
    const seedMoneyChangeHandler = e => {
        setSeedMoney(e.target.value);
    };
    const [targetReturnRate, setTargetReturnRate] =
        useRecoilState(openTargetState);
    const targetChangeHandler = e => {
        setTargetReturnRate(e.target.value);
    };
    const [expireAt, setOpenExpireAt] = useRecoilState(openExpireAtState);
    const openExpireChangeHandler = e => {
        setOpenExpireAt(e.target.value);
    };
    return (
        <CardContent>
            <ContentLayout>
                <WriteText className="card-text">목표 수익률</WriteText>
                <RateInput
                    className="form-control form-control-lg"
                    type="number"
                    min="0"
                    placeholder="수익률"
                    onChange={targetChangeHandler}
                    value={targetReturnRate}
                />
                <WriteText> %</WriteText>
            </ContentLayout>
            <ContentLayout>
                <WriteText className="card-text">투자 자본금 </WriteText>
                <div className="field">
                    <p>
                        <Select
                            name="city"
                            className="select"
                            onChange={seedMoneyChangeHandler}
                            value={seedMoney}
                        >
                            {seedMoneyList.map(money => (
                                <Option value={money.value} key={money.value}>
                                    {money.name}
                                </Option>
                            ))}
                        </Select>
                    </p>
                </div>
            </ContentLayout>
            <ContentLayout>
                <WriteText className="card-text">투자 만기일 </WriteText>
                <div className="field">
                    <p>
                        <Select
                            name="city"
                            className="select"
                            onChange={openExpireChangeHandler}
                            value={expireAt}
                        >
                            {openExpireAtList.map(openExpire => (
                                <Option
                                    value={openExpire.value}
                                    key={openExpire.value}
                                >
                                    {openExpire.name}
                                </Option>
                            ))}
                        </Select>
                    </p>
                </div>
            </ContentLayout>
        </CardContent>
    );
}

export default BankOpen;
const CardContent = styled.div`
    align-items: center;
    margin: 25px;
`;
const ContentLayout = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 10px;
`;
const RateInput = styled.input`
    padding: 10px;
    width: 50%;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.inputColor};
    &:focus {
        outline: 1px solid ${props => props.theme.hoverColor};
    }
`;
const WriteText = styled.div`
    font-weight: bold;
    padding: 7px;
`;

const Select = styled.select`
    padding: 10px;
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 5px;
    background-color: ${props => props.theme.inputColor};
    &:focus {
        outline: 1px solid ${props => props.theme.hoverColor};
    }
`;
const Option = styled.option`
    background-color: ${props => props.theme.inputColor};
    color: ${props => props.theme.textColor};
    border: 1px solid ${props => props.theme.borderColor};
    padding: 3px 0;
`;
