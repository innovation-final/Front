import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';
import List from '../elements/List';

const fields = ['제목', '신문사', '작성일자'];
const items = [
    ['이것은 제목입니다', '경향일보', '2022/09/04'],
    ['이것은 제목입니다', '한국일보', '2022/09/04'],
    ['이것은 제목입니다', '연합뉴스', '2022/09/04'],
];

function RelatedArticlesBox({ isPC }) {
    return (
        <StyleRelatedArticlesBox isPC={isPC}>
            <Title>관련기사</Title>
            <ContentBox>
                <List fields={fields} items={items} flexRatio={4} />
            </ContentBox>
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
