import React from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import Layout from '../layout/Layout';
import Button from '../elements/Button';
import useInput from '../../hooks/useInput';
import { postAPI } from '../../shared/api';
import writeIcon from '../../static/write.png';
import StockNameSearch from './StockNameSearch';

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
            queryClient.invalidateQueries('post');
        },
    });

    const submitHandler = () => {
        if (window.confirm('작성하겠습니까?')) {
            mutation.mutate({ content, title, stockName });
            alert('작성되었습니다');
            navigate('/community');
        } else {
            return false;
        }
        return 0;
    };

    return (
        <Layout>
            <WriteTitle>
                <Icon src={writeIcon} />
                <Text>글쓰기</Text>
            </WriteTitle>
            <Card className="card">
                <ButtonBox>
                    <ClearButton>
                        <ClearIcon
                            name="cancelButton"
                            onClick={() => {
                                navigate('/Community');
                            }}
                        />
                    </ClearButton>
                </ButtonBox>
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
                        <StockNameSearch />
                        <Input
                            list="search"
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
                    <Button size="md" _onClick={submitHandler}>
                        완료
                    </Button>
                </ButtonLayout>
            </Card>
        </Layout>
    );
}

export default BoardWrite;
const WriteTitle = styled.div`
    display: flex;
    margin-bottom: 10px;
    height: 20px;
    align-items: center;
`;
const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    border-bottom-style: solid;
    border-width: 1.5px;
    border-color: #5eb9ff;
`;
const Icon = styled.img`
    margin: 15px;
    height: 20px;
`;
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
    border-radius: 10px;
    border: 2px solid skyblue;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Input = styled.input`
    padding: 10px;
    width: 95%;
    border: 1px solid skyblue;
    border-radius: 5px;
    background-color: #f1fafd;
    &:focus {
        outline: 1px solid #5eb9ff;
    }
`;

const TextareaContent = styled.textarea`
    width: 95%;
    padding: 10px;
    height: 300px;
    border: 1px solid skyblue;
    background-color: #f1fafd;
    border-radius: 5px;
    &:focus {
        outline: 1px solid #5eb9ff;
    }
`;
const ContentDiv = styled.div`
    display: flex;
    margin: 50px;
`;

const ButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ClearButton = styled.div`
    color: #c7c7c7;
    margin: 10px;
    &:hover {
        color: #a3a1a1;
    }
`;
const ButtonBox = styled.div`
    float: right;

    display: flex;
`;
