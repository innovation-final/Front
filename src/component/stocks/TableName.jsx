import React from 'react';
import styled from 'styled-components';

function TableName({ keys = [] }) {
    return (
        <StyleTableName>
            <TableList>
                {keys.map(key => (
                    <TableContent key={key}>{key}</TableContent>
                ))}
            </TableList>
        </StyleTableName>
    );
}

export default TableName;

const StyleTableName = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: ${props => props.theme.secondaryColor};
`;

const TableList = styled.ul`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
`;
const TableContent = styled.li`
    text-align: center;
    width: 100%;
    white-space: nowrap;
`;
