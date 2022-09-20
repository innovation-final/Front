import React, { useContext } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { WideContext } from '../../context/WideContext';

function ContentBox({ children, title, isLong }) {
    const context = useContext(WideContext);
    const { wide } = context;
    return (
        <Wrapper>
            <Title wide={wide}>{title}</Title>
            {isLong ? (
                <StyleLongBox wide={wide}>{children}</StyleLongBox>
            ) : (
                <StyleContentBox wide={wide}>{children}</StyleContentBox>
            )}
        </Wrapper>
    );
}

export default ContentBox;

ContentBox.defaultProps = {
    isLong: false,
};

ContentBox.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    isLong: PropTypes.bool,
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
`;
const Title = styled.div`
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 15px;
    transform: translate(${props => (props.wide ? 0 : -70)}px);
    transition: all ease-in-out 0.3s;
`;
const StyleContentBox = styled.div`
    min-width: 550px;
    padding: 10px;
    transform: translate(${props => (props.wide ? 0 : -60)}px);
    width: calc(100% - ${props => (props.wide ? 0 : -170)}px);
    min-height: 320px;
    border: 3px solid skyblue;
    border-radius: 15px;

    transition: all ease-in-out 0.3s;
`;

const StyleLongBox = styled.div`
    min-width: 1320px;
    padding: 10px;
    transform: translate(${props => (props.wide ? 0 : -100)}px);
    width: calc(100% - ${props => (props.wide ? 0 : -250)}px);
    min-height: 320px;
    border: 3px solid skyblue;
    border-radius: 15px;

    transition: all ease-in-out 0.3s;
`;
