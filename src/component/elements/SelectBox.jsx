import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SelectBox({ options = [] }) {
    return (
        <StyleSelectBox>
            <select type="text">
                {options.map(option => (
                    <option key={option} value={option}>
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
    border: 1px solid skyblue;
    border-radius: 8px;
    height: 100%;

    select {
        border: none;
        border-radius: 8px;
        padding: 0px 10px 0px 10px;
        height: 100%;
    }
`;
