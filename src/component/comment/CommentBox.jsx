import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CommentBox({ children }) {
    return <StyledCommentBox>{children}</StyledCommentBox>;
}

export default CommentBox;

CommentBox.propTypes = {
    children: PropTypes.node.isRequired,
};

const StyledCommentBox = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;
