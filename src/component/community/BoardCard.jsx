import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import PropTypes from 'prop-types';

function BoardCard({ post }) {
    const { title, stockName, content, id } = post;

    const navigate = useNavigate();

    return (
        <div>
            <div
                onClick={() => {
                    navigate(`/post/${id}`);
                }}
                aria-hidden="true"
            >
                <Card className="card">
                    <CardLayout className="card-body">
                        <CardTitle className="card-title">{title}</CardTitle>
                        <br />
                        <p className="card-text">{stockName}</p>
                        <br />
                        <p className="card-text">{content}</p>
                    </CardLayout>
                </Card>
            </div>
        </div>
    );
}

export default BoardCard;
BoardCard.propTypes = {
    title: PropTypes.string,
    stockName: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
};

const CardTitle = styled.p`
    font-size: 20px;
`;

const CardLayout = styled.div`
    margin: 10px;
`;

const Card = styled.div`
    margin: 10px;
    height: 200px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #79a7ca;
    /* background-color: rgba(214, 227, 239, 0.468); */
    background-color: #93cce71b;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    &:hover {
        opacity: 0.7;
    }
`;
