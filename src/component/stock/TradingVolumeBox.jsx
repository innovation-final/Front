import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import ContentBox from '../elements/ContentBox';
import { esUSNumberParser } from '../../util/parser';

const keys = ['날짜', '종가 (KRW)', '거래량'];

function TradingVolumeBox({ isPC, volumeData }) {
    return (
        <StyleTradingVolumeBox isPC={isPC}>
            <Title>순매매 거래량 (최근 10일)</Title>
            <ContentBox>
                <VolumeWrapper>
                    <TableNames>
                        {keys.map(key => (
                            <TableName key={key}>{key}</TableName>
                        ))}
                    </TableNames>
                    <TableData>
                        {volumeData.map(volume => (
                            <VolumeInfo key={uuid()}>
                                <VolumeDate>{volume.date}</VolumeDate>
                                <VolumeClose>
                                    {esUSNumberParser(volume.close)}
                                </VolumeClose>
                                <Volume>
                                    {esUSNumberParser(volume.volume)}
                                </Volume>
                            </VolumeInfo>
                        ))}
                    </TableData>
                </VolumeWrapper>
            </ContentBox>
        </StyleTradingVolumeBox>
    );
}

export default React.memo(TradingVolumeBox);

const StyleTradingVolumeBox = styled.div`
    width: ${props => (props.isPC ? '32' : '100')}%;
`;

const Title = styled.div`
    height: 60px;
    font-weight: 600;
    font-size: 1.3vw;
    line-height: 50px;
`;
const VolumeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 15px;
`;
const TableNames = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.secondaryColor};
    height: 37px;
    border-radius: 15px 15px 0px 0px;
`;
const TableName = styled.div`
    text-align: center;
`;
const TableData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 280px;
`;
const VolumeInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 5px;
    margin-left: 20px;

    cursor: pointer;
`;
const Volume = styled.div`
    width: 30%;
    letter-spacing: -1px;
    font-size: 14.5px;
    text-align: center;
`;
const VolumeClose = styled.div`
    width: 10%;
    letter-spacing: -1px;
    font-size: 14.5px;
    margin-left: -10px;
    text-align: left;
`;
const VolumeDate = styled.div`
    width: 35%;
    display: flex;
    font-size: 14.5px;
    letter-spacing: -1px;
    align-items: flex-end;
    text-align: left;
    margin-left: -10px;
`;
