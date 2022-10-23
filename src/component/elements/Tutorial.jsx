import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import tutorialState from '../../atoms/tutorial/tutorialState';
import TutorialMessage from './TutorialMessage';

function Tutorial() {
    const [step, setStep] = useState(0);
    const setTutorial = useSetRecoilState(tutorialState);

    const nextStep = () => {
        if (step > 2) {
            setTutorial(false);
            setStep(0);
            return;
        }
        setStep(props => props + 1);
    };
    const exit = () => {
        setTutorial(false);
        setStep(0);
    };
    return (
        <Screen onClick={() => nextStep()}>
            <Wrapper>
                <Exit onClick={() => exit()}>X</Exit>
                <StyleContainer>
                    <StyleHeader step={step === 0}>
                        <TutorialMessage>
                            이 창에서 주식 종목을 검색하고, 내 잔고와 수익률을
                            확인하세요.
                        </TutorialMessage>
                    </StyleHeader>
                    <StyleWrapper>
                        <StyleLeftSide>
                            <StyleInfoContainer step={step === 1}>
                                <TutorialMessage>
                                    현재 선택된 주식정보입니다. 모의투자
                                    진행시에 해당 창의 주식 정보로 진행됩니다.
                                </TutorialMessage>
                            </StyleInfoContainer>
                            <StyleMyStock>
                                <StyleMyStockLine step={step === 2}>
                                    <TutorialMessage left>
                                        현재 가지고 있는 주식 잔고입니다.
                                    </TutorialMessage>
                                </StyleMyStockLine>
                            </StyleMyStock>
                        </StyleLeftSide>
                        <StyledRightSide>
                            <StyleTrade step={step === 3}>
                                <TutorialMessage left>
                                    버튼을 눌러 투자를 진행하세요!
                                </TutorialMessage>
                            </StyleTrade>
                        </StyledRightSide>
                    </StyleWrapper>
                </StyleContainer>
            </Wrapper>
        </Screen>
    );
}

export default Tutorial;

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.6);
    z-index: 999;
`;

const Wrapper = styled.div`
    position: relative;
    transform: translate(323px, 68px);
`;

const Exit = styled.div`
    color: white;
    position: absolute;
    right: 20px;
    top: -40px;
`;

const StyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 82.5vw;
`;

const StyleHeader = styled.div`
    position: relative;
    padding: 0.9rem;
    width: 98%;
    min-height: 2.2rem;
    background-color: transparent;
    border: 3px dotted white;
    border-radius: 15px;
    margin-bottom: 21px;
    visibility: ${props => (props.step ? 'visible' : 'hidden')};
    /* border: 1px solid ${props => props.theme.borderColor}; */
`;

const StyleInfoContainer = styled.div`
    position: relative;
    width: 100%;
    border: 3px dotted white;
    visibility: ${props => (props.step ? 'visible' : 'hidden')};
    border-radius: 20px;
    background-color: transparent;
    margin-bottom: 10px;
    min-height: 33rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const StyleMyStockLine = styled.div`
    padding: 1rem;
    min-height: 230px;
    border: 3px dotted white;
    visibility: ${props => (props.step ? 'visible' : 'hidden')};
    border-radius: 15px;
`;

const StyleTrade = styled.div`
    position: relative;
    border: 3px dotted white;
    visibility: ${props => (props.step ? 'visible' : 'hidden')};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    height: 96%;
    background-color: transparent;
`;

const StyleWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    @media screen and (min-width: 1400px) {
        display: grid;
        min-width: 97%;
        position: relative;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, minmax(120px, 100%));
        gap: 20px;
        background-color: rgba(0.3, 41, 3, 0.4);
    }
`;

const StyleLeftSide = styled.div`
    margin-bottom: 20px;
    width: auto;
    @media screen and (min-width: 1400px) {
        grid-column: 1/4;
        grid-row: 1/4;
        width: 100%;
    }
`;

const StyleMyStock = styled.div`
    position: relative;
    width: 100%;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

const StyledRightSide = styled.div`
    @media screen and (min-width: 1400px) {
        grid-column: 4/5;
        grid-row: 1/4;
    }
`;
