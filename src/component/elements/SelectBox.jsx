import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SelectBox({ options = [''], selectedOption, _getOption }) {
    const onChange = event => {
        event.preventDefault();
        _getOption(event.target.value);
    };

    return (
        <StyleSelectBox>
            <select type="text" onChange={onChange} value={selectedOption}>
                {options.map(option => (
                    <option key={option} value={String(option)}>
                        {option}
                    </option>
                ))}
            </select>
        </StyleSelectBox>
    );
}

export default SelectBox;

SelectBox.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

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
