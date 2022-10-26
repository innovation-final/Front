import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from './Card';
import { ScrollLayout } from './style';
import hakjoon from '../../static/hakjoon.jpg';
import jiyoung from '../../static/jiyoung.jpg';
import junhyoung from '../../static/junhyoung.jpg';
import soonger from '../../static/soonger.jpg';
import junsu from '../../static/junsu.jpg';

function Developers() {
    return (
        <ScrollLayout id="developer" bgColor="orange">
            <Wrapper>
                <Header>Developers</Header>
                <Grid>
                    <Card
                        name={'홍준형'}
                        url={'https://github.com/JShwa0429'}
                        position={'Front-End'}
                        img={junhyoung}
                    />
                    <Card
                        name={'민지영'}
                        url={'https://github.com/Meanz12'}
                        position={'Back-End'}
                        img={jiyoung}
                    />
                    <Card
                        name={'김학준 👑'}
                        url={'https://github.com/lgkrwnsdll'}
                        position={'Back-End'}
                        img={hakjoon}
                    />
                    <Card
                        name={'김승원'}
                        url={'https://github.com/soonger3306'}
                        position={'Front-End'}
                        img={soonger}
                    />
                    <Card
                        name={'황준수'}
                        url={'https://github.com/Hwang-Junsu'}
                        position={'Front-End'}
                        img={junsu}
                    />
                </Grid>
                <Container>
                    <Repository
                        onClick={() =>
                            window.open(
                                'https://github.com/innovation-final/Front',
                            )
                        }
                    >
                        <GitHubIcon fontSize="large" />
                        Front-End
                    </Repository>
                    <Repository
                        onClick={() =>
                            window.open(
                                'https://github.com/innovation-final/Backend',
                            )
                        }
                    >
                        <GitHubIcon fontSize="large" />
                        Back-End
                    </Repository>
                </Container>
            </Wrapper>
        </ScrollLayout>
    );
}

export default Developers;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Header = styled.div`
    font-size: 4rem;
    margin-bottom: 30px;
    font-family: 'Pretendard-Regular';
`;

const Grid = styled.div`
    display: flex;
    align-items: center;
    min-width: 480px;
    gap: 30px;

    @media screen and (min-width: 1400px) {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 480px;
        gap: 30px;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 80px;
    width: 700px;
`;

const Repository = styled.div`
    width: 250px;
    height: 70px;
    border-radius: 15px;
    background-color: white;
    color: black;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    cursor: pointer;

    &:hover {
        scale: 1.05;
        transition: scale ease-in-out 0.1s;
    }
`;
