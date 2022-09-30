import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { wideState } from '../../atoms/atoms';

function MainContainer({ children }) {
    const wide = useRecoilState(wideState);
    return <StyleMainContainer $wide={wide}>{children}</StyleMainContainer>;
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
