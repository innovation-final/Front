import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';

function RelatedPostsBox({ isPC }) {
    return (
        <StyleRelatedPostsBox isPC={isPC}>
            <Title>관련 게시글</Title>
            <ContentBox>관련게시글</ContentBox>
        </StyleRelatedPostsBox>
    );
}

export default RelatedPostsBox;

const StyleRelatedPostsBox = styled.div`
    width: ${props => (props.isPC ? '32' : '100')}%;
`;

const Title = styled.div`
    height: 50px;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
`;
