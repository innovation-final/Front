import React from 'react';
import styled from 'styled-components';

function CommunityMain() {
    return (
        <Layout>
            <p
                style={{ margin: '15px', fontSize: '20px' }}
                className="card-text"
            >
                자유게시판
            </p>
            <BoxLayout>
                <div>
                    <p style={{ margin: '15px' }} className="card-text">
                        최신순
                    </p>

                    <Card className="card">
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">
                                dd With supporting text below as a
                                naturalfdgdfgdfgdddddddddddddddd
                            </Content>
                        </CardLayout>
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">
                                ddral lead-in to additional
                                content.dssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                            </Content>
                        </CardLayout>
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">ddt.</Content>
                        </CardLayout>
                    </Card>
                </div>

                <div>
                    <p style={{ margin: '15px' }} className="card-text">
                        좋아요순
                    </p>
                    <Card className="card">
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">
                                dd With supporting text below as a natural
                            </Content>
                        </CardLayout>
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">
                                ddral lead-in to additional
                                contentddddddddddfffffffffffffffffffffffddddddddddddddddddddddddddddddddddddd.
                            </Content>
                        </CardLayout>
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">ddt.</Content>
                        </CardLayout>
                    </Card>
                </div>
                <div>
                    <p style={{ margin: '15px' }} className="card-text">
                        조회순
                    </p>
                    <Card className="card">
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">
                                dd With supporting text below as a natural
                            </Content>
                        </CardLayout>
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">
                                ddral lead-in to additional content.
                            </Content>
                        </CardLayout>
                        <CardLayout className="card-body">
                            <CardTitle className="card-title">기아차</CardTitle>
                            <br />
                            <Content className="card-text">종목:기아차</Content>

                            <br />
                            <Content className="card-text">ddt.</Content>
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
    overflow: hidden;
    max-width: 100%;
`;
const Layout = styled.div`
    max-width: 100%;
    width: 100%;
`;

const CardTitle = styled.h5`
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const CardLayout = styled.div`
    margin: 5px;
    border-bottom-style: solid;
    border-width: 1px;
    border-color: #79a7ca;
    width: 98%;
    height: 100px;
    &:hover {
        opacity: 0.5;
    }
`;

const Card = styled.div`
    margin: 15px;
    height: 315px;
    width: 380px;
    max-width: 100%;
    border-radius: 5px;
    overflow: hidden;
    flex-grow: 1;
    border: 1px solid #7999ca;
    background-image: linear-gradient(to top, #e6e9f0 0%, #e6f0fe 100%);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Content = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    height: 20px;
`;
