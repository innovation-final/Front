import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

function ContentBox({ children }) {
    let i = 0;
    i = `${i}px`;
    console.log(i);
    return (
        <Wrapper>
            <StyleContentBox>{children}</StyleContentBox>
        </Wrapper>
    );
}

export default ContentBox;

ContentBox.propTypes = {
    children: PropTypes.node,
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    position: relative;
`;
const StyleContentBox = styled.div`
    position: relative;
    width: 100%;
    min-height: 320px;
    max-height: 320px;
    transition: all ease-in-out 0.3s;
    overflow: hidden;
`;
