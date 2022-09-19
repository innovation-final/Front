import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Input(props) {
    const { multiLine } = props;

    if (multiLine) return <StyleTextArea />;
    return <StyleInput />;
}

export default Input;

Input.defaultProps = {
    multiLine: false,
};
Input.propTypes = {
    multiLine: PropTypes.bool,
};

const StyleInput = styled.input`
    padding: 10px;
    border: 1px solid #48dbfb;
    border-radius: 10px;

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
