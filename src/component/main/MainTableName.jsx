import React from 'react';
import styled from 'styled-components';

function MainTableName({ keys = [] }) {
    return (
        <TableList>
            {keys.map(key => (
                <TableContent key={key}>{key}</TableContent>
            ))}
        </TableList>
    );
}

export default MainTableName;

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
`;
