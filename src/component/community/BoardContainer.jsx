import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function BoardContainer({ children }) {
    return <StyleBoardContainer>{children}</StyleBoardContainer>;
}

export default BoardContainer;

BoardContainer.propTypes = {
    children: PropTypes.node,
};

const StyleBoardContainer = styled.div`
    width: 100%;
    margin-left: 5%;
    margin-top: 1%;
`;
