import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';

function GraphBox({ isPC }) {
    return (
        <StyleGraphBox isPC={isPC}>
            <ContentBox>GraphBox</ContentBox>
        </StyleGraphBox>
    );
}

export default GraphBox;

const StyleGraphBox = styled.div`
    width: ${props => (props.isPC ? '75' : '100')}%;
`;
