import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { ScrollLayout } from './style';
import hakjoon from '../../static/hakjoon.jpg';
import jiyoung from '../../static/jiyoung.png';
import junhyoung from '../../static/junhyoung.png';
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
