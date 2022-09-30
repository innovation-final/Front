import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';

function RelatedArticlesBox({ isPC }) {
    return (
        <StyleRelatedArticlesBox isPC={isPC}>
            <Title>관련기사</Title>
            <ContentBox>Temp</ContentBox>
        </StyleRelatedArticlesBox>
    );
}

export default RelatedArticlesBox;

const StyleRelatedArticlesBox = styled.div`
    width: ${props => (props.isPC ? '32' : '100')}%;
`;

const Title = styled.div`
    height: 50px;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
`;
