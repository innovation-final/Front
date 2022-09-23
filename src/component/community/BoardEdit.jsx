import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { postAPI } from '../../shared/api';

function BoardEdit() {
    const ref = useRef(null);

    const { id } = useParams();
    // 데이터 뽑아오기
    const { data } = useQuery(['post', id], () => postAPI.getPost(id));
    const { stockName, title, content } = data.data.data;
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // 제목수정
    const [editTitle, setEditTitle] = React.useState(title);
    const onChangeTitle = event => {
        setEditTitle(event.target.value);
    };
    // 종목수정
    const [editStockName, setEditStockName] = React.useState(stockName);
    const onChangeStockName = event => {
        setEditStockName(event.target.value);
    };
    // 내용 수정
    const [editContent, setEditContent] = React.useState(content);
    const onChangeContent = event => {
        setEditContent(event.target.value);
    };

    const putPost = async req => {
        const response = await postAPI.putPost(id, req);
        return response;
    };

    const editMutation = useMutation(req => putPost(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });
    // 수정 버튼
    const onClickEdit = () => {
        editMutation.mutate({
            title: editTitle,
            content: editContent,
            stockName: editStockName,
        });
        navigate(`/post/${id}`);
    };

    return (
        <Layout>
            <Card className="card">
                <CardLayout className="card-body">
                    <CardDiv>
                        <h1 className="card-text">제목: &nbsp;</h1>
                        <Input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="제목"
                            onChange={onChangeTitle}
                            ref={ref}
                            value={editTitle}
                        />
                    </CardDiv>
                    <CardDiv>
                        <h1 className="card-text">종목: &nbsp;</h1>
                        <Input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="종목"
                            onChange={onChangeStockName}
                            ref={ref}
                            value={editStockName}
                        />
                    </CardDiv>
                    <ContentDiv>
                        <h1 className="card-text">내용:&nbsp;</h1>
                        <TextareaContent
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="내용"
                            onChange={onChangeContent}
                            ref={ref}
                            value={editContent}
                        />
                    </ContentDiv>
                </CardLayout>
                <ButtonLayout>
                    <Button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={onClickEdit}
                    >
                        수정완료
                    </Button>
                </ButtonLayout>
            </Card>
        </Layout>
    );
}

export default BoardEdit;

const CardLayout = styled.div`
    margin: 15px;
`;
const CardDiv = styled.div`
    display: flex;
    align-items: center; //수직정렬
    margin: 50px;
`;
const Card = styled.div`
    margin: 10px;
    height: 80vh;
    width: 95%;
    border-radius: 5px;
    border: 1px solid #79a7ca;
    background-color: #93cce71b;
`;

const Input = styled.input`
    width: 95%;
    height: 30px;
    border: 1px solid #79a7ca;
    border-radius: 5px;
    &:focus {
        outline: 1px solid #00345b;
    }
`;

const TextareaContent = styled.textarea`
    width: 95%;
    height: 300px;
    border: 1px solid #79a7ca;
    border-radius: 5px;
    &:focus {
        outline: 1px solid #00345b;
    }
`;
const ContentDiv = styled.div`
    display: flex;
    margin: 50px;
`;

const Button = styled.button`
    width: 90px;
    height: 50px;
    background-color: #b6e5ff;
    border: 1px solid #79a7ca;
    border-radius: 5px;
    &:hover {
        background-color: #c5edff;
    }
`;

const ButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
