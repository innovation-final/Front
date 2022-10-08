import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { timeToToday } from '../../util/parser';

const createAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
};

function BoardCard({ post }) {
    const {
        title,
        stockName,
        member,
        id,
        createdAt,
        likes,
        dislikes,
        commentNum,
    } = post;
    const navigate = useNavigate();
    const date = new Date(createdAt);
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
                    <CardTitle>
                        {`${
                            title.length > 30
                                ? `${title.slice(0, 30)} ...`
                                : title
                        }`}
                    </CardTitle>
                    <CardCommentCount>{`[${commentNum}]`}</CardCommentCount>
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
                        <CardCreatedAt>{timeToToday(date)}</CardCreatedAt>
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
    width: 95%;
    cursor: pointer;
    border-bottom: 2px solid ${props => props.theme.borderColor};
`;

const CardLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;

    &:hover {
        opacity: 0.7;
        background-color: ${props => props.theme.hoverColor};
    }
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
    letter-spacing: -1px;
    display: flex;
    margin-top: 1%;
`;
const CardCommentCount = styled.div`
    margin-left: 10px;
    margin-top: 1.5%;
    font-weight: 600;
    color: ${props => props.theme.borderColor};
`;
const CardStockName = styled.div`
    font-size: 15px;
    overflow: hidden;
    letter-spacing: -1px;
    min-width: 12%;
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
