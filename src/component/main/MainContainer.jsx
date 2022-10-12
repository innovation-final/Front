import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { wideState } from '../../atoms/common/commonState';

function MainContainer({ children }) {
    const wide = useRecoilState(wideState);
    return <StyleMainContainer $wide={wide}>{children}</StyleMainContainer>;
}

export default MainContainer;

MainContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const StyleMainContainer = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    margin: 20px;
    max-width: 1700px;

    @media screen and (min-width: 1400px) {
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    }
`;
