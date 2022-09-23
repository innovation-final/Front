import React, { useRef } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
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
        if (window.confirm('수정하겠습니까?')) {
            editMutation.mutate({
                title: editTitle,
                content: editContent,
                stockName: editStockName,
            });
            alert('수정되었습니다');
            navigate(`/post/${id}`);
        } else {
            return false;
        }
        return 0;
    };

    return (
        <Layout>
            <WriteTitle>
                <Icon>
                    <EditIcon />
                </Icon>
                <Text>글수정</Text>
            </WriteTitle>

            <Card className="card">
                <ButtonBox>
                    <ClearButton>
                        <ClearIcon
                            name="cancelButton"
                            onClick={() => {
                                navigate(`/post/${id}`);
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
                        수정
                    </Button>
                </ButtonLayout>
            </Card>
        </Layout>
    );
}

export default BoardEdit;

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
const Icon = styled.div`
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
    width: 95%;
    height: 30px;
    border: 1px solid skyblue;
    background-color: #f1fafd;
    border-radius: 5px;

    &:focus {
        outline: 1px solid #5eb9ff;
    }
`;

const TextareaContent = styled.textarea`
    width: 95%;
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

const Button = styled.button`
    width: 80px;
    height: 40px;
    background-color: #b7e6ff;
    border: 1px solid #7fc5fc;
    border-radius: 5px;
    &:hover {
        background-color: #abe4ff;
        outline: 1px solid #5eb9ff;
    }
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
