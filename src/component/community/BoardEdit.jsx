import React from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';

import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import { postAPI } from '../../shared/api';

function BoardEdit(props) {
    const { id, title, content, stockName } = props;
    const [putPost, setPutPost] = React.useState(props);

    const queryClient = useQueryClient();

    const editPost = async req => {
        const response = await postAPI.editPost(id, req);
        return response;
    };

    const editMutation = useMutation(req => editPost(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });
    const onClickEdit = () => {
        editMutation.mutate({
            content: putPost,
            title: putPost,
            stockName: putPost,
        });
    };
    const onChange = event => {
        setPutPost(event.target.value);
    };

    return (
        <Layout>
            <Card className="card">
                <CardLayout className="card-body">
                    <CardDiv>
                        <h1 className="card-text">제목:{title} &nbsp;</h1>
                        <Input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="제목"
                            onChange={onChange}
                        />
                    </CardDiv>
                    <CardDiv>
                        <h1 className="card-text">종목:{stockName} &nbsp;</h1>
                        <Input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="종목"
                            onChange={onChange}
                        />
                    </CardDiv>
                    <ContentDiv>
                        <h1 className="card-text">내용:{content} &nbsp;</h1>
                        <TextareaContent
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="내용"
                            onChange={onChange}
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
BoardEdit.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    stockName: PropTypes.string.isRequired,
    // date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

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
