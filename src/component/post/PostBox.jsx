import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '../elements/Button';
import ProfileCard from './ProfileCard';

function PostBox({ postInfo }) {
    return (
        <StylePostBox>
            <ContentWrapper>
                <SubHeader>
                    <StockName>{postInfo.stockName}</StockName>
                    <PostInfoBox>
                        <ViewCount>조회 수 : 0</ViewCount>
                        <CommentCount>
                            댓글 : {postInfo.comments.length}
                        </CommentCount>
                    </PostInfoBox>
                </SubHeader>
                <Header>
                    <TitleBox>
                        <Title>{postInfo.title}</Title>
                        <DateBox>2022-09-19</DateBox>
                    </TitleBox>
                </Header>

                <ProfileCard user={postInfo.member} />
                <Content>{postInfo.content}</Content>
            </ContentWrapper>
            <LikeToggleBox>
                <Buttons>
                    <Button>
                        <LikeBox>
                            <ThumbUpIcon />
                        </LikeBox>
                    </Button>
                    <LikeCount>{postInfo.dislikes + postInfo.likes}</LikeCount>
                    <Button variant="error">
                        <LikeBox>
                            <ThumbDownIcon />
                        </LikeBox>
                    </Button>
                </Buttons>
            </LikeToggleBox>
        </StylePostBox>
    );
}

export default PostBox;

PostBox.propTypes = {
    postInfo: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        stockName: PropTypes.string,
        likes: PropTypes.number,
        dislikes: PropTypes.number,
        nickname: PropTypes.string,
        member: PropTypes.shape({
            nickname: PropTypes.string,
            email: PropTypes.string,
        }),
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                nickname: PropTypes.string,
                content: PropTypes.string,
            }),
        ),
    }),
};

const StylePostBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ContentWrapper = styled.div`
    position: relative;
    min-height: 500px;
    padding: 30px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
`;
const StockName = styled.div`
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    margin-bottom: 7px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
`;
const DateBox = styled.div`
    margin-right: 40px;
`;
const Title = styled.div`
    margin-left: 20px;
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
`;
const SubHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
`;
// const NickName = styled.div`
//     margin-left: 30px;
//     font-size: 13px;
// `;
const PostInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 15%;
    margin-right: 20px;
    justify-content: space-evenly;
`;
const ViewCount = styled.div`
    font-size: 13px;
`;
const CommentCount = styled.div`
    font-size: 13px;
`;
const Content = styled.div`
    margin-left: 40px;
`;
const LikeToggleBox = styled.div`
    width: 100%;
    padding-bottom: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Buttons = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-evenly;
`;
const LikeCount = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin: 0px 10px;
    letter-spacing: -1px;
    padding-top: 10px;
`;

const LikeBox = styled.div``;
