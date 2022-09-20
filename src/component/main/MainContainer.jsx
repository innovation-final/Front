import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { WideContext } from '../../context/WideContext';

function MainContainer({ children }) {
    const context = useContext(WideContext);
    const { wide } = context;
    return <StyleMainContainer wide={wide}>{children}</StyleMainContainer>;
}

export default MainContainer;

MainContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const StyleMainContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 1700px;
`;
