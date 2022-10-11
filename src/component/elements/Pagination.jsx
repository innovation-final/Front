import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { isDarkState } from '../../atoms/atoms';

function Pagination(props) {
    const {
        postPerPage,
        totalPosts,
        paginate,
        currentPage,
        leftMove,
        rightMove,
    } = props;
    const isDark = useRecoilValue(isDarkState);
    const pageNumbers = [];
    const totalPage = Math.ceil(totalPosts / postPerPage);
    const pageCountView = 7;
    const middlePage = Math.ceil(pageCountView / 2);
    if (totalPage <= pageCountView) {
        for (let i = 1; i <= totalPage; i += 1) {
            pageNumbers.push(i);
        }
    } else if (currentPage < middlePage) {
        for (let i = 1; i <= pageCountView; i += 1) {
            pageNumbers.push(i);
        }
    } else if (currentPage > totalPage - middlePage) {
        for (let i = totalPage - pageCountView + 1; i <= totalPage; i += 1) {
            pageNumbers.push(i);
        }
    } else {
        for (
            let i = currentPage - (pageCountView - middlePage);
            i <= currentPage + (pageCountView - middlePage);
            i += 1
        ) {
            pageNumbers.push(i);
        }
    }

    const color = () => {
        if (isDark) return 'white';
        return 'black';
    };
    const focusColor = () => {
        if (isDark) return '#DE6B3E';
        return 'skyblue';
    };

    return (
        <Container>
            <PageNavigation>
                <LeftArrow onClick={leftMove}>
                    <ChevronLeftIcon />
                </LeftArrow>
                {pageNumbers.map(num => (
                    <PageBox key={num}>
                        <Page
                            onClick={() => paginate(num)}
                            currentPage={currentPage}
                            $color={color}
                            focusColor={focusColor}
                            num={num}
                        >
                            {num}
                        </Page>
                    </PageBox>
                ))}
                <RightArrow onClick={() => rightMove(totalPage)}>
                    <ChevronRightIcon />
                </RightArrow>
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
const PageNavigation = styled.ul`
    display: flex;
    align-items: center;
`;
const PageBox = styled.li`
    display: inline-block;
    overflow: hidden;
`;
const Page = styled.span`
    width: 10px;
    height: 10px;
    padding: 10px;
    font-size: ${props => (props.currentPage === props.num ? '20' : '17')}px;
    color: ${props =>
        props.currentPage === props.num ? props.focusColor : props.$color};
    font-weight: ${props => (props.currentPage === props.num ? '700' : '500')};
    cursor: pointer;
`;

const LeftArrow = styled.span`
    margin-right: 3px;
    cursor: pointer;
`;
const RightArrow = styled.span`
    margin-left: 3px;
    cursor: pointer;
`;
