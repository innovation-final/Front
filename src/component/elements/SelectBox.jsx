import React from 'react';
import styled from 'styled-components';

function SelectBox({
    options = [{ name: '', value: '' }],
    selectedOption,
    _getOption,
}) {
    const onChange = event => {
        event.preventDefault();
        _getOption(event.target.value);
    };

    return (
        <StyleSelectBox>
            <select
                type="text"
                onChange={onChange}
                value={selectedOption.value}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </StyleSelectBox>
    );
}

export default SelectBox;

const StyleSelectBox = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 8px;
    height: 100%;
    color: ${props => props.theme.textColor};

    select {
        border: none;
        border-radius: 8px;
        padding: 0px 10px 0px 10px;
        height: 100%;
        color: ${props => props.theme.textColor};
        background-color: ${props => props.theme.inputColor};
    }
`;
