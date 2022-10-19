import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import LatestPost from './LatestPost';
import TodayStock from './TodayStock';
import { wideState } from '../../atoms/common/commonState';

function HeaderOverview() {
    const wide = useRecoilValue(wideState);
    return (
        <StyleOverview wide={wide}>
            <TodayStock />
            <LatestPost />
        </StyleOverview>
    );
}

export default HeaderOverview;

const StyleOverview = styled.div`
    width: 60%;
    transform: translateX(${props => (props.wide ? 290 : 70)}px);
    transition: all ease-in-out 0.3s;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
