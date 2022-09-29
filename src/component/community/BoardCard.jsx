import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const createAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
};

function BoardCard({ post }) {
    const { title, stockName, member, id, createdAt, likes, dislikes } = post;

    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const day = String(date.getDate()).padStart(2, 0);
    const hour = String(date.getHours()).padStart(2, 0);
    const minute = String(date.getMinutes()).padStart(2, 0);
    const navigate = useNavigate();
    return (
        <Card
            variants={createAnimation}
            onClick={() => {
                navigate(`/post/${id}`);
            }}
        >
            <CardLayout>
                <CardDivide>
                    <CardStockName>{stockName}</CardStockName>
                    <CardTitle>{title}</CardTitle>
                    <CardCommentCount>[1]</CardCommentCount>
                </CardDivide>
                <CardDivide2>
                    <CardLike>
                        <CardIconBox thumbUp>
                            <ThumbUpOffAltIcon />
                        </CardIconBox>
                        {likes}
                        <CardIconBox thumbUp={false}>
                            <ThumbDownOffAltIcon />
                        </CardIconBox>
                        {dislikes}
                    </CardLike>
                    <CardRightDown>
                        <CardWriter>written by {member.nickname}</CardWriter>
                        <CardCreatedAt>{`${year}-${month}-${day} ${hour}:${minute}`}</CardCreatedAt>
                    </CardRightDown>
                </CardDivide2>
            </CardLayout>
        </Card>
    );
}

export default BoardCard;
BoardCard.propTypes = {
    title: PropTypes.string,
    stockName: PropTypes.string,
    member: PropTypes.shape({
        email: PropTypes.string,
        nickname: PropTypes.string,
        id: PropTypes.number,
    }),
    id: PropTypes.string,
};

const Card = styled(motion.div)`
    margin: 10px;
    margin-bottom: 10px;
    width: 85%;
    cursor: pointer;
    border-bottom: 2px solid skyblue;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
    &:hover {
        opacity: 0.7;
    }
`;

const CardLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    padding: 5px;
`;
const CardDivide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 2%;
    width: 100%;
`;
const CardDivide2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 40%;
`;
const CardTitle = styled.div`
    font-size: 25px;
    overflow: hidden;
    margin-left: 40px;
    display: flex;
    margin-top: 1%;
`;
const CardCommentCount = styled.div`
    margin-left: 10px;
    margin-top: 1.5%;
`;
const CardStockName = styled.div`
    font-size: 15px;
    overflow: hidden;
    margin-top: 2%;
`;

const CardRightDown = styled.div`
    display: flex;
    flex-direction: row;
`;
const CardWriter = styled.div`
    font-size: 13px;
`;
const CardLike = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
`;
const CardIconBox = styled.div`
    margin: 0px 10px;
    color: ${props => (!props.thumbUp ? '#4a69bd' : '#e55039')};
`;
const CardCreatedAt = styled.div`
    font-size: 13px;
    margin-left: 20px;
`;
