import React, { useState } from 'react';
import styled from 'styled-components';

function Dropdown({ options, selected }) {
    const [setInputValue] = useState('');
    const handleDropDownClick = clickedOption => {
        setInputValue(clickedOption);
    };
    return (
        <DropDownContainer>
            {options.map((option, index) => {
                return (
                    <li
                        key={option}
                        onClick={() => handleDropDownClick}
                        aria-hidden="true"
                        className={selected === index ? 'selected' : ''}
                    >
                        {option}
                    </li>
                );
            })}
        </DropDownContainer>
    );
}

export default Dropdown;
const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const DropDownContainer = styled.ul`
    background-color: #ffffff;
    display: block;

    color: #585757;
    list-style-type: none;
    margin-block-start: 10px;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

    border: 1px solid skyblue;
    background-color: #f1fafd;
    border-radius: 1rem;
    box-shadow: ${boxShadow};
    z-index: 3;

    > li:hover {
        background-color: #c6e7fc;
        border-radius: 1rem;
        color: #10a3ff;
    }

    > li {
        padding: 10px;

        &.selected {
            outline: 1px solid #5eb9ff;
        }
    }
`;
// const Input = styled.input`
//     padding: 10px;
//     width: 95%;
//     border: 1px solid skyblue;
//     border-radius: 5px;
//     background-color: #f1fafd;
//     &:focus {
//         outline: 1px solid #5eb9ff;
//     }
// `;
