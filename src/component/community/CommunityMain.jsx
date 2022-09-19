import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function CommunityMain() {
    const navigate = useNavigate();

    return (
        <Layout>
            <p style={{ margin: '10px' }} className="card-text">
                자유게시판
            </p>
            <BoxLayout>
                <div>
                    <p style={{ margin: '10px' }} className="card-text">
                        최신순
                    </p>

                    <Card
                        className="card"
                        onClick={() => navigate('/communityboard')}
                    >
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">
                                기아차오름ㅎㅎ
                            </CardTitle>
                            <br />
                            <p className="card-text">종목:기아차</p>
                            <br />
                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </CardLayout>
                    </Card>
                </div>

                <div>
                    <p style={{ margin: '10px' }} className="card-text">
                        좋아요순
                    </p>
                    <Card
                        className="card"
                        onClick={() => navigate('/communityboard')}
                    >
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">
                                기아차오름ㅎㅎ
                            </CardTitle>
                            <br />
                            <p className="card-text">종목:기아차</p>
                            <br />
                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </CardLayout>
                    </Card>
                </div>
                <div>
                    <p style={{ margin: '10px' }} className="card-text">
                        조회순
                    </p>
                    <Card
                        className="card"
                        onClick={() => navigate('/communityboard')}
                    >
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">
                                기아차오름ㅎㅎ
                            </CardTitle>
                            <br />
                            <p className="card-text">종목:기아차</p>
                            <br />
                            <p className="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </CardLayout>
                    </Card>
                </div>
            </BoxLayout>
        </Layout>
    );
}

export default CommunityMain;

const BoxLayout = styled.div`
    display: flex;

    max-width: 100%;
    overflow: hidden;
`;
const Layout = styled.div`
    max-width: 100%;
    width: 100%;
`;

const CardTitle = styled.h5`
    font-size: 20px;
`;

const CardLayout = styled.h5`
    margin: 10px;
`;

const Card = styled.div`
    margin: 10px;
    height: 300px;
    max-width: 100%;
    border-radius: 5px;
    text-align: center;
    border: 1px solid #79a7ca;
    background-color: #ffffff;

    &:hover {
        opacity: 0.7;
    }
`;
