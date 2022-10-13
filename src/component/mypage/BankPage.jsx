import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import SavingsIcon from '@mui/icons-material/Savings';
import BankAccount from './Bank/BankAccount';
import BankOpen from './Bank/BankOpen';
import { bankAPI } from '../../shared/api';
import {
    seedMoneyState,
    openTargetState,
    openExpireAtState,
} from '../../atoms/account/accountState';

import useAccount from '../../hooks/useAccount';

function BankPage() {
    const queryClient = useQueryClient();
    // eslint-disable-next-line no-unused-vars
    const [isEdit, setIsEdit] = React.useState(false);
    const [page, setPage] = useState('account');

    const [seedMoney, setSeedMoney] = useRecoilState(seedMoneyState);
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
        Swal.fire({
            title: '계좌 개설하겠습니까?',
            imageUrl:
                'https://velog.velcdn.com/images/soonger3306/post/1f89fb6c-f5b6-47b1-9788-4bc6faa6875a/image.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ff6026',
            confirmButtonText: '개설',
            cancelButtonText: '취소',
            reverseButtons: true,
        }).then(result => {
            if (result.isConfirmed) setPage(event.target.value);
            setIsEdit(props => !props);
            mutation.mutate({ seedMoney, targetReturnRate, expireAt });
            setSeedMoney(5000000);
            setTargetReturnRate(0);
            setOpenExpireAt(30);
            Swal.fire('개설되었습니다.');
        });
    };

    const { data } = useAccount();

    const bankData = data;

    return (
        <>
            <ContentLayout>
                <IconLayout>
                    <SavingsIcon />
                    <IconText>모의투자 계좌</IconText>
                </IconLayout>
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
`;
const IconText = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
const Button = styled.button`
    color: #ff5900;
    background-color: #fcce37;
    border: 0;
    float: right;
    margin-left: 24em;
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
const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;
