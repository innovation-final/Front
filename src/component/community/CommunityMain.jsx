import React from 'react';
import styled from 'styled-components';

function CommunityMain() {
    return (
        <>
            <p
                style={{ margin: '15px', fontSize: '20px' }}
                className="card-text"
            >
                자유게시판
            </p>
            <div style={{ width: '100%', display: 'flex' }}>
                <p
                    style={{
                        width: '100%',
                        marginLeft: '15px',
                        fontSize: '15px',
                        float: 'left',
                    }}
                >
                    조회순
                </p>
                <div
                    style={{
                        float: 'right',
                        marginLeft: '15px',
                        width: '100%',
                    }}
                >
                    <p>좋아요순</p>
                </div>
            </div>
            <BoxLayout>
                <CardLeft className="card">
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
                        <Content className="card-text">
                            ddtDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD.
                        </Content>
                    </CardLayout>
                </CardLeft>

                <CardRight className="card">
                    <CardLayout className="card-body">
                        <CardTitle className="card-title">기아차</CardTitle>
                        <br />
                        <Content className="card-text">종목:기아차</Content>

                        <br />
                        <Content className="card-text">
                            dd With supporting text below as a
                            naturalfdgdfgdfgdDDDDDDDDDDDDDDDDDDDDDDdDDDDDDDDDDDDDDDDdddddddddddddd
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
                </CardRight>
            </BoxLayout>
        </>
    );
}

export default CommunityMain;

const BoxLayout = styled.div`
    display: flex;
    overflow: hidden;
    width: 100%;
`;

const CardTitle = styled.p`
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const CardLayout = styled.div`
    margin: 5px;
    border-bottom-style: solid;
    border-width: 1px;
    border-color: #79bfca;
    width: 98%;
    height: 100px;
    &:hover {
        opacity: 0.5;
    }
`;

const CardLeft = styled.div`
    margin: 15px;
    height: 315px;
    width: 100%;

    float: left;
    border-radius: 5px;
    overflow: hidden;
    flex-grow: 1;
    border: 1px solid #79bfca;
    /* background-image: linear-gradient(to top, #e4eff4 0%, #ffffff 100%); */
    background-color: #93cce71b;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const CardRight = styled.div`
    margin: 15px;
    height: 315px;
    width: 100%;

    float: right;
    border-radius: 5px;
    overflow: hidden;
    flex-grow: 1;
    border: 1px solid #79bfca;
    /* background-image: linear-gradient(-105deg, #ffffff 0%, #e4eff4 100%); */
    background-color: #93cce71b;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const Content = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    height: 20px;
`;
