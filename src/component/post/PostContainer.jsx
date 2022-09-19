import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function PostContainer({ children }) {
    return <StylePost>{children}</StylePost>;
}

export default PostContainer;

PostContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const StylePost = styled.div`
    width: 100%;
`;
