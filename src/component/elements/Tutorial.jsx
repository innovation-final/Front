/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { wideState } from '../../atoms/common/commonState';
import tutorialState from '../../atoms/tutorial/tutorialState';
import TutorialMessage from './TutorialMessage';
import useWindowSize from '../../hooks/useWindowSize';

function Tutorial() {
    const [step, setStep] = useState(0);
    const isWide = useRecoilValue(wideState);
    const setTutorial = useSetRecoilState(tutorialState);
    const window = useWindowSize();

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
    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => (document.body.style = `overflow: auto`);
    }, []);
    return (
        <Screen onClick={() => nextStep()}>
            <HeaderBlock />
            <SideBarBlock $isWide={isWide} />
            <Wrapper isWide={isWide} window={window}>
                <Exit onClick={() => exit()}>X</Exit>
                <StyleContainer isWide={isWide}>
                    <StyleHeader $step={step === 0}>
                        <TutorialMessage>
                            이 창에서 주식 종목을 검색하고, 내 잔고와 수익률을
                            확인하세요.
                        </TutorialMessage>
                    </StyleHeader>
                    <StyleWrapper>
                        <StyleLeftSide>
                            <StyleInfoContainer $step={step === 1}>
                                <TutorialMessage>
                                    현재 선택된 주식정보입니다. 모의투자
                                    진행시에 해당 창의 주식 정보로 진행됩니다.
                                </TutorialMessage>
                            </StyleInfoContainer>
                            <StyleMyStock>
                                <StyleMyStockLine $step={step === 2}>
                                    <TutorialMessage top>
                                        현재 가지고 있는 주식 잔고입니다.
                                    </TutorialMessage>
                                </StyleMyStockLine>
                            </StyleMyStock>
                        </StyleLeftSide>
                        <StyledRightSide>
                            <StyleTrade $step={step === 3}>
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
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(1, 1, 1, 0.6);
    z-index: 999;
`;

const HeaderBlock = styled.div`
    position: fixed;
    height: 60px;
    width: 100%;
`;

const SideBarBlock = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: ${props => (props.$isWide ? 290 : 74)}px;
    height: 100vh;
    color: ${props => props.theme.textColor};
    transition: width ease-in-out 0.3s;
`;

const Wrapper = styled.div`
    transform: translate(${props => (props.$wide ? 270 : 70)}px, 57px);
    width: calc(100vw - ${props => (props.$wide ? 270 : 70)}px);
    padding: 10px;
    padding-left: 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-width: 480px;
    height: 90vh;
    box-sizing: border-box;
    z-index: 11;
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
`;

const StyleHeader = styled.div`
    position: relative;
    padding: 0.9rem;
    min-height: 2.2rem;
    border: 3px dotted white;
    border-radius: 15px;
    margin-bottom: 21px;
    visibility: ${props => (props.$step ? 'visible' : 'hidden')};
`;

const StyleInfoContainer = styled.div`
    position: relative;
    width: 100%;
    border: 3px dotted white;
    visibility: ${props => (props.$step ? 'visible' : 'hidden')};
    border-radius: 20px;
    background-color: transparent;
    margin-bottom: 10px;
    min-height: 33rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 100%;
`;

const StyleMyStockLine = styled.div`
    min-height: 260px;
    width: 100%;
    border: 3px dotted white;
    visibility: ${props => (props.$step ? 'visible' : 'hidden')};
    border-radius: 15px;
`;

const StyleTrade = styled.div`
    position: relative;
    border: 3px dotted white;
    width: 100%;
    visibility: ${props => (props.$step ? 'visible' : 'hidden')};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 96%;
    background-color: transparent;
`;

const StyleWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;

    @media screen and (min-width: 1400px) {
        display: grid;
        width: 100%;
        position: relative;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, minmax(120px, 100%));
        gap: 20px;
    }
`;

const StyleLeftSide = styled.div`
    margin-bottom: 20px;
    width: 100%;
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
