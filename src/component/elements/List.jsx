import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

function List({ fields = [''], items = [''], flexRatio = 1 }) {
    const fieldRendering = () => {
        const result = [];
        result.push(
            <MainFieldName flexRatio={flexRatio}>{fields[0]}</MainFieldName>,
        );
        for (let i = 1; i < fields.length; i += 1) {
            result.push(<FieldName>{fields[i]}</FieldName>);
        }
        return result;
    };

    const [fieldNameBox, setFieldNameBox] = useState(null);
    useEffect(() => {
        setFieldNameBox(fieldRendering());
    }, []);

    return (
        <StyleList>
            <FieldNameBox>{fieldNameBox}</FieldNameBox>
            <ListContainer>
                {items.map(item => (
                    <ListItem
                        key={Date.now()}
                        item={item}
                        flexRatio={flexRatio}
                    />
                ))}
            </ListContainer>
        </StyleList>
    );
}

export default List;

const StyleList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 10px;
`;

const FieldNameBox = styled.div`
    top: 0px;
    left: 0px;
    width: 92%;
    padding: 10px;
    background-color: orange;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const MainFieldName = styled.div`
    flex-grow: ${props => props.flexRatio};
    justify-content: flex-start;
    margin-left: 20px;
`;
const FieldName = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`;
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 320px;
    overflow-y: scroll;
`;
