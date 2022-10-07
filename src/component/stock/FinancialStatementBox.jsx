import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { stockAPI } from '../../shared/api';
import ContentBox from '../elements/ContentBox';
import LoadingSpinner from '../elements/LoadingSpinner';
import { esUSNumberParser } from '../../util/parser';

const columnKeys = [
    '총수익',
    '당기순이익',
    '영업이익',
    '총자산',
    '총부채',
    '영업활동현금흐름',
];
const rowKeys = ['2018/12', '2019/12', '2020/12', '2021/12'];

function FinancialStatementBox({ isPC }) {
    const { id } = useParams();
    const { data, isLoading, isError } = useQuery(
        ['table', id],
        () => stockAPI.getStockTable(id),
        {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
        },
    );
    const info = data?.data.data;

    const renderTable = () => {
        return isError ? (
            <NoData>재무재표 정보가 없습니다.</NoData>
        ) : (
            <TableWrapper>
                <RowWrapper>
                    <RowTable>
                        {rowKeys.map(key => (
                            <ItemContent key={key}>{key}</ItemContent>
                        ))}
                    </RowTable>
                </RowWrapper>
                <ColumnWrapper>
                    <ColumnTable>
                        {columnKeys.map(key => (
                            <ItemContent key={key}>{key}</ItemContent>
                        ))}
                    </ColumnTable>
                    <DataTable>
                        {info.map(values => (
                            <ItemList key={uuidv4()}>
                                {values.map(value => (
                                    <Data key={uuidv4()}>
                                        {esUSNumberParser(value)}
                                    </Data>
                                ))}
                            </ItemList>
                        ))}
                    </DataTable>
                </ColumnWrapper>
                <Unit>단위: 억(원) | 출처 :야후파이낸스</Unit>
            </TableWrapper>
        );
    };

    return (
        <StyleFinancialStatementBox isPC={isPC}>
            <Title>재무재표</Title>
            <Wrapper>
                <ContentBox>
                    {isLoading ? <LoadingSpinner /> : renderTable()}
                </ContentBox>
            </Wrapper>
        </StyleFinancialStatementBox>
    );
}

export default FinancialStatementBox;

const StyleFinancialStatementBox = styled.div`
    width: ${props => (props.isPC ? '30' : '100')}%;
`;

const Wrapper = styled.div``;

const Title = styled.div`
    height: 50px;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
`;

const TableWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 99%;
    height: 318px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 15px;
    overflow: hidden;
`;
const RowWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.secondaryColor};
    border-radius: 15px 15px 0px 0px;
`;
const ColumnWrapper = styled.div`
    height: 100%;
    border-radius: 0px 0px 15px 15px;
`;
const RowTable = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 100px;
    width: 100%;
    height: 40px;
`;

const ColumnTable = styled.ul`
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 20%;
    height: 90%;
    background-color: ${props => props.theme.secondaryColor};
    border-right: 1px solid ${props => props.theme.borderColor};
    z-index: -1;
`;
const DataTable = styled.div`
    transform: translate(32px, 18px);
    padding-left: 50px;
    padding-right: 40px;
    padding-bottom: 25px;
    height: 100%;
`;
const ItemList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    margin-bottom: 7px;
`;
const ItemContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    font-size: 14px;
    width: 100%;
    white-space: pre-wrap;
`;
const Data = styled.li`
    text-align: center;
    letter-spacing: -1px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 2px;
`;
const Unit = styled.span`
    position: absolute;
    bottom: 2px;
    right: 10px;
    font-size: 12px;
`;

const NoData = styled.div`
    color: ${props => props.theme.textColor};
    z-index: 1;
`;
