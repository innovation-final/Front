import React from 'react';
import styled from 'styled-components';
import ContentBox from '../elements/ContentBox';
import List from '../elements/List';

const fields = ['제목', '작성자', '작성일자'];
const items = [
    ['고정좀 시켜주세요', '황준수', '2022/09/04'],
    ['떡상할까요', '누구', '2022/09/04'],
    ['이거 망한것 같은데...', '누구일까요', '2022/09/04'],
];

function RelatedPostsBox({ isPC }) {
    return (
        <StyleRelatedPostsBox isPC={isPC}>
            <Title>관련 게시글</Title>
            <ContentBox>
                <List fields={fields} items={items} flexRatio={4} />
            </ContentBox>
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
