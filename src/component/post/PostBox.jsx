import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import emptylike from '../../static/emptylike.png';
import emptydislike from '../../static/emptydislike.png';
import like from '../../static/like.png';
import dislike from '../../static/dislike.png';
import { postAPI } from '../../shared/api';
import ProfileCard from './ProfileCard';
import LoadingSpinner from '../elements/LoadingSpinner';

function PostBox() {
    const { id } = useParams();
    // eslint-disable-next-line no-unused-vars
    const { data, isLoading } = useQuery(['post', id], () =>
        postAPI.getPost(id),
    );

    const postInfo = data?.data.data;
    const donelike = data?.data.data.doneLike;
    const donedislike = data?.data.data.doneDisLike;
    const user = data?.data.data.member;

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const deletePost = async postId => {
        const response = await postAPI.deletePost(postId);
        return response;
    };

    const mutation = useMutation(postId => deletePost(postId), {
        onError: error => console.log(error),
        onSuccess: () => {
            navigate(`/communityboard`);
            queryClient.invalidateQueries('posts');
        },
        // onSettled: () => {
        //     // 요청이 성공하든, 에러가 발생되든 실행하고 싶은 경우
        //     console.log('실행시켜주세요ㅠㅠ');
        // },
    });

    const onPostDelete = () => {
        if (window.confirm('정말 삭제하겠습니까?')) {
            mutation.mutate(id);
            alert('삭제되었습니다');
        } else {
            return false;
        }
        return 0;
    };
    // 좋아요
    const likeposts = async req => {
        const response = await postAPI.likePost(id, req);

        return response;
    };
    const likemutation = useMutation(req => likeposts(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });

    const [doneLike, setLikes] = useState(false);

    const likeHandler = e => {
        e.preventDefault();

        setLikes(!doneLike);
        likemutation.mutate({ doneLike });
    };

    // 싫어요
    const dislikeposts = async req => {
        const response = await postAPI.dislikePost(id, req);
        return response;
    };
    const dislikemutation = useMutation(req => dislikeposts(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });

    const [doneDisLike, setdisLikes] = useState(false);

    const dislikeHandler = e => {
        e.preventDefault();

        setdisLikes(!doneDisLike);
        dislikemutation.mutate({ doneDisLike });
    };

    if (isLoading) return <LoadingSpinner />;
    return (
        <StylePostBox>
            <div>
                <ButtonBox>
                    {user.id && (
                        <>
                            <DeleteOutlineIcon
                                name="postDeleteButton"
                                onClick={onPostDelete}
                            />
                            <EditIcon
                                name="commentButton"
                                onClick={() => {
                                    navigate(`/boardedit/${id}`);
                                }}
                            />
                        </>
                    )}
                    <ClearButton>
                        <ClearIcon
                            name="cancelButton"
                            onClick={() => {
                                navigate('/CommunityBoard');
                            }}
                        />
                    </ClearButton>
                </ButtonBox>
            </div>
            <ContentWrapper>
                <SubHeader>
                    <StockName>{postInfo.stockName}</StockName>

                    <PostInfoBox>
                        <ViewCount>조회 수 : 0</ViewCount>
                        <CommentCount>
                            댓글: {postInfo.comments.length}
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
                    {donelike ? (
                        <JoinBtn src={like} onClick={e => likeHandler(e)} />
                    ) : (
                        <JoinBtn
                            src={emptylike}
                            onClick={e => likeHandler(e)}
                        />
                    )}

                    <LikeCount>{postInfo.likes}</LikeCount>
                    {donedislike ? (
                        <JoinBtn
                            src={dislike}
                            onClick={e => dislikeHandler(e)}
                        />
                    ) : (
                        <JoinBtn
                            src={emptydislike}
                            onClick={e => dislikeHandler(e)}
                        />
                    )}
                    <LikeCount>{postInfo.dislikes}</LikeCount>
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
    padding-top: 10px;
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
    width: 9%;

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
const JoinBtn = styled.img`
    width: 30px;
`;

const ButtonBox = styled.div`
    float: right;

    display: flex;
`;
const ClearButton = styled.div`
    color: #c7c7c7;
    &:hover {
        color: #a3a1a1;
    }
`;
