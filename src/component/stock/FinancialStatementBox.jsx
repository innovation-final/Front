import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ContentBox from '../elements/ContentBox';
import LoadingSpinner from '../elements/LoadingSpinner';
import { esUSNumberParser } from '../../util/parser';
import useGetFinancial from '../../hooks/useGetFinancial';

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
    const { data, isLoading, isError } = useGetFinancial(id);
    const info = data;

    const renderTable = () => {
        if (!info) {
            return (
                <NoDataWrapper>
                    <NoData>재무제표 정보가 없습니다.</NoData>
                </NoDataWrapper>
            );
        }
        return isError ? (
            <NoDataWrapper>
                <NoData>재무제표 정보가 없습니다.</NoData>{' '}
            </NoDataWrapper>
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
            <Title>재무제표</Title>
            <Wrapper>
                <ContentBox>
                    {isLoading ? (
                        <NoDataWrapper>
                            <LoadingSpinner />
                        </NoDataWrapper>
                    ) : (
                        renderTable()
                    )}
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
    font-size: 1.8rem;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const DataTable = styled.div`
    transform: translate(32px, 18px);
    padding-left: 50px;
    padding-right: 40px;
    padding-bottom: 25px;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const ItemList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    margin-bottom: 7px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const ItemContent = styled.li`
    text-align: center;
    letter-spacing: -1px;
    font-size: 14px;
    width: 100%;
    white-space: pre-wrap;
    overflow: hidden;
`;
const Data = styled.li`
    text-align: center;
    letter-spacing: -1px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

const NoDataWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 99%;
    min-height: 318px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 15px;
    overflow: hidden;
`;
