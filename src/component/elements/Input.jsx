import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Input(props) {
    const { multiLine, placeholder, _onChange } = props;
    if (multiLine)
        return <StyleTextArea placeholder={placeholder} onChange={_onChange} />;
    return <StyleInput placeholder={placeholder} onChange={_onChange} />;
}

export default Input;

Input.defaultProps = {
    multiLine: false,
    _onChange: () => {},
};
Input.propTypes = {
    multiLine: PropTypes.bool,
    placeholder: PropTypes.string,
    _onChange: PropTypes.func,
};

const StyleInput = styled.input`
    font-family: 'Pretendard-Regular';
    padding: 10px;
    border: 1px solid #48dbfb;
    border-radius: 10px;
    width: 100%;

    &:active,
    &:focus,
    &:hover {
        outline: 2px solid #0abde3;
    }
`;

const StyleTextArea = styled.textarea`
    padding: 10px;
    border: 1px solid #48dbfb;
    border-radius: 10px;

    &:active,
    &:focus,
    &:hover {
        outline: 2px solid #0abde3;
    }
`;
