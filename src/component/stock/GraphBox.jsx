import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { ChartCandleStick, ChartArea } from '../chart';

function GraphBox({ isPC, code }) {
    const divRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [currentState, setCurrentState] = useState('월봉');
    const width = '100%';
    const onClick = event => {
        setCurrentState(event.target.innerText);
    };
    return (
        <StyleGraphBox isPC={isPC} ref={divRef}>
            <Buttons>
                <Button
                    type="button"
                    onClick={onClick}
                    isCurrent={currentState === '월봉'}
                >
                    월봉
                </Button>
                <Button
                    type="button"
                    onClick={onClick}
                    isCurrent={currentState === '연'}
                >
                    연
                </Button>
            </Buttons>
            {currentState === '월봉' ? (
                <ChartCandleStick
                    name=""
                    code={code}
                    width={width}
                    height={300}
                />
            ) : (
                <ChartArea name="" code={code} width={width} height={300} />
            )}
        </StyleGraphBox>
    );
}

export default GraphBox;

const StyleGraphBox = styled.div`
    width: 100%;
    height: 100%;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 120px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 30px;
    background-color: white;
    border: 1px solid ${props => props.theme.primaryColor};
    border-radius: 15px;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.hoverColor};
    }
    background-color: ${props =>
        props.isCurrent ? props.theme.hoverColor : 'white'};
`;
