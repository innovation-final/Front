import React from 'react';
import styled from 'styled-components';

function Investment() {
    return (
        <StyleTableName>
            <RankText>1</RankText>
            <Text>준수</Text>
            <Text>45%</Text>
        </StyleTableName>
    );
}

export default Investment;

const RankText = styled.p`
    font-weight: bold;
    width: 30%;
    text-align: center;
    margin: 10px 10px 10px 5px;

    color: ${props => props.theme.textColor};
`;
const Text = styled.p`
    font-weight: bold;
    width: 31%;
    text-align: center;
    margin: 10px;
    color: ${props => props.theme.textColor};
`;
const StyleTableName = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px;
`;
