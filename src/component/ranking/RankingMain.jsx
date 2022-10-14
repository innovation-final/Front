import React from 'react';
import styled from 'styled-components';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Medal from './Medal';
import Rankings from './Rankings';

function RankingMain() {
    return (
        <Layout>
            <Container>
                <IconLayout>
                    <EmojiEventsIcon />
                    <Text>모의투자 랭킹</Text>
                </IconLayout>
                <StyleTableName>
                    <Text>순위</Text>
                    <Text>닉네임</Text>
                    <Text>수익률</Text>
                </StyleTableName>
                <Rankings />
            </Container>
            <BadgeContainer>
                <Medal />
            </BadgeContainer>
        </Layout>
    );
}

export default RankingMain;
const Layout = styled.div`
    display: flex;
    padding: 10px;
`;

const Container = styled.div`
    width: 50%;
    padding: 10px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 20px;
    min-height: 40.7rem;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const BadgeContainer = styled.div`
    width: 50%;
    padding: 2rem;
    border-radius: 20px;
    min-height: 40.7rem;
    display: flex;
    flex-direction: column;
`;
const IconLayout = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
`;
const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    color: ${props => props.theme.textColor};
`;
const StyleTableName = styled.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    justify-content: space-around;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: ${props => props.theme.secondaryColor};
`;
