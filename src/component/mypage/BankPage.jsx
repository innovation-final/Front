import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import BankAccount from './Bank/BankAccount';
import BankOpen from './Bank/BankOpen';
import { bankAPI } from '../../shared/api';
import {
    despositState,
    openTargetState,
    openExpireAtState,
} from '../../atoms/account/accountState';
import useAccount from '../../hooks/useAccount';

function BankPage() {
    const queryClient = useQueryClient();
    // eslint-disable-next-line no-unused-vars
    const [isEdit, setIsEdit] = React.useState(false);
    const [page, setPage] = useState('account');

    const [deposit, setDeposit] = useRecoilState(despositState);
    const [expireAt, setOpenExpireAt] = useRecoilState(openExpireAtState);
    const [targetReturnRate, setTargetReturnRate] =
        useRecoilState(openTargetState);

    const openBank = async req => {
        const response = await bankAPI.postBankOpen(req);
        return response;
    };

    const mutation = useMutation(req => openBank(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('bank');
        },
    });

    const onClick = event => {
        setPage(event.target.value);
        setIsEdit(props => !props);
    };
    const OpenBankOnClick = event => {
        setPage(event.target.value);
        setIsEdit(props => !props);
        mutation.mutate({ deposit, targetReturnRate, expireAt });
        setDeposit('5000000');
        setTargetReturnRate(0);
        setOpenExpireAt(30);
    };

    const { data } = useAccount();

    const bankData = data;

    return (
        <>
            <ContentLayout>
                {!isEdit ? (
                    <Button
                        value="open"
                        current={page === 'open'}
                        onClick={onClick}
                    >
                        계좌 만들기
                    </Button>
                ) : (
                    <ButtonLayout>
                        <OpenButton
                            onClick={OpenBankOnClick}
                            value="account"
                            current={page === 'account'}
                        >
                            개설완료
                        </OpenButton>
                    </ButtonLayout>
                )}
            </ContentLayout>
            <PageLayer>
                {page === 'account' ? (
                    <BankAccount bankData={bankData} />
                ) : null}
                {page === 'open' ? <BankOpen /> : null}
            </PageLayer>
        </>
    );
}

export default BankPage;

const ContentLayout = styled.div`
    display: flex;
    align-items: center;
`;
const Button = styled.button`
    color: #ff5900;
    background-color: #fcce37;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #ff870e;
    }
`;
const OpenButton = styled.button`
    color: #ff6200;
    background-color: #fcce37;
    border: 0;
    height: 40px;
    width: 120px;
    border-radius: 5px;
    margin-left: 155px;
    cursor: pointer;
    &:hover {
        background-color: #ff870e;
    }
    bottom: 20px;
    position: relative;
`;

const ButtonLayout = styled.div`
    display: flex;
    position: absolute;
    top: 23em;
    right: 25%;
    align-items: center;
`;
const PageLayer = styled.div``;
