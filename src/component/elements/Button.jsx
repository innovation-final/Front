import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SIZES = {
    sm: css`
        --button-font-size: 0.8rem;
        --button-padding: 8px 12px;
        --button-radius: 4px;
    `,
    md: css`
        --button-font-size: 1rem;
        --button-padding: 12px 16px;
        --button-radius: 8px;
    `,
    lg: css`
        --button-font-size: 1.25rem;
        --button-padding: 16px 20px;
        --button-radius: 12px;
    `,
};
const VARIANTS = {
    normal: css`
        --button-color: #ffffff;
        --button-bg-color: ${props => props.theme.buttonColor};
        --button-hover-bg-color: ${props => props.theme.hoverColor};
    `,
    success: css`
        --button-color: #ffffff;
        --button-bg-color: #1dd1a1;
        --button-hover-bg-color: #10ac84;
    `,
    error: css`
        --button-color: #ffffff;
        --button-bg-color: #ff6b6b;
        --button-hover-bg-color: #ee5253;
    `,
    warning: css`
        --button-color: #212529;
        --button-bg-color: #feca57;
        --button-hover-bg-color: #ff9f43;
    `,
    transparent: css`
        --button-color: ${props => props.theme.textColor};
        --button-bg-color: rgba(0, 0, 0, 0);
        --button-hover-bg-color: rgba(0, 0, 0, 0);
    `,
};

function Button(props) {
    const { disabled, size, variant, _onClick, children } = props;
    const sizeStyle = SIZES[size];
    const variantStyle = VARIANTS[variant];
    return (
        <StyleButton
            type="button"
            size={sizeStyle}
            disabled={disabled}
            variant={variantStyle}
            onClick={_onClick}
        >
            {children}
        </StyleButton>
    );
}

export default Button;

const StyleButton = styled.button`
    ${props => props.size}
    ${props => props.variant}
    font-family: 'Pretendard-Regular';
    margin: 0;
    border: none;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
    border-radius: var(--button-radius, 8px);
    background-color: var(--button-bg-color, #0d6efd);
    color: var(--button-color, #ffffff);
    white-space: nowrap;
    font-weight: bold;
    cursor: pointer;

    &:active,
    &:hover,
    &:focus {
        background-color: var(--button-hover-bg-color, #025ce2);
    }

    &:disabled {
        cursor: default;
        opacity: 0.5;
        background-color: var(--button-bg-color, #025ce2);
    }
`;

Button.defaultProps = {
    children: 'Button',
    size: 'sm',
    disabled: false,
    variant: 'normal',
    _onClick: () => {},
};
Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    variant: PropTypes.string,
    _onClick: PropTypes.func,
};
