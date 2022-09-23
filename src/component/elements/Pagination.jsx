import React from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 값이 늘어났을 때 처리 아직 x
function Pagination({ postPerPage, totalPosts, paginate, currentPage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i += 1) {
        pageNumbers.push(i);
    }

    return (
        <Container>
            <PageNavigation>
                {pageNumbers.map(num => (
                    <PageBox key={num}>
                        <Page
                            onClick={() => paginate(num)}
                            currentPage={currentPage}
                            num={num}
                        >
                            {num}
                        </Page>
                    </PageBox>
                ))}
            </PageNavigation>
        </Container>
    );
}

export default Pagination;

const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
`;
const PageNavigation = styled.ul``;
const PageBox = styled.li`
    display: inline-block;
    overflow: hidden;
`;
const Page = styled.span`
    width: 10px;
    height: 10px;
    padding: 10px;
    font-size: ${props => (props.currentPage === props.num ? '20' : '17')}px;
    color: ${props => (props.currentPage === props.num ? 'skyblue' : 'black')};
    font-weight: ${props => (props.currentPage === props.num ? '700' : '500')};

    cursor: pointer;
`;
