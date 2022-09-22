import React from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import useInput from '../../hooks/useInput';
import { postAPI } from '../../shared/api';

function BoardWrite() {
    const [title, onChangeTitleHandler] = useInput();
    const [content, onChangeContentHandler] = useInput();
    const [stockName, onChangeStockNameHandler] = useInput();

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const addComment = async req => {
        const response = await postAPI.postPost(req);
        return response;
    };

    const mutation = useMutation(req => addComment(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
    });

    const submitHandler = () => {
        mutation.mutate({ content, title, stockName });
        navigate('/communityboard');
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
                            onChange={onChangeTitleHandler}
                        />
                    </CardDiv>
                    <CardDiv>
                        <h1 className="card-text">종목: &nbsp;</h1>
                        <Input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="종목"
                            onChange={onChangeStockNameHandler}
                        />
                    </CardDiv>
                    <ContentDiv>
                        <h1 className="card-text">내용: &nbsp;</h1>
                        <TextareaContent
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="내용"
                            onChange={onChangeContentHandler}
                        />
                    </ContentDiv>
                </CardLayout>
                <ButtonLayout>
                    <Button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={submitHandler}
                    >
                        완료
                    </Button>
                </ButtonLayout>
            </Card>
        </Layout>
    );
}

export default BoardWrite;

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
