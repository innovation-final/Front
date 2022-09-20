import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';

function BoardWrite() {
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
                        />
                    </CardDiv>
                    <CardDiv>
                        <h1 className="card-text">종목: &nbsp;</h1>
                        <Input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="종목"
                        />
                    </CardDiv>
                    <ContentDiv>
                        <h1 className="card-text">내용: &nbsp;</h1>
                        <TextareaContent
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="내용"
                        />
                    </ContentDiv>
                </CardLayout>
                <ButtonLayout>
                    <Button type="button" className="btn btn-outline-primary">
                        완료
                    </Button>
                </ButtonLayout>
            </Card>
        </Layout>
    );
}

export default BoardWrite;

const CardLayout = styled.h5`
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
    background-color: rgba(214, 224, 239, 0.468);
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
    background-color: #c8d6e5;
    border: 1px solid #79a7ca;
    border-radius: 5px;
    &:hover {
        background-color: #b3c2d3;
    }
`;

const ButtonLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
