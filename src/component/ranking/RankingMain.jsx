import React, { useState } from 'react';
import styled from 'styled-components';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Medal from './Medal';

import SelectBox from '../elements/SelectBox';
import Like from './rankings/Like';
import Investment from './rankings/Investment';

function RankingMain() {
    const options = [
        { name: '실시간 순위', value: '실시간순위' },
        { name: '일주일 순위', value: '일주일순위' },
        { name: '한달 순위', value: '한달순위' },
    ];
    const defaultOption = '실시간순위';
    const [option, setOption] = useState(defaultOption);
    const getOption = selected => {
        setOption(selected);
    };
    const [page, setPage] = useState('investment');

    const onClick = event => {
        setPage(event.target.value);
    };
    return (
        <>
            <IconLayout>
                <IconButton
                    onClick={onClick}
                    value="investment"
                    current={page === 'investment'}
                >
                    <Icon>
                        <EmojiEventsIcon />
                    </Icon>
                    모의투자 랭킹
                </IconButton>
                <IconButton
                    onClick={onClick}
                    value="like"
                    current={page === 'like'}
                >
                    <Icon>
                        <EmojiEventsIcon />
                    </Icon>
                    커뮤니티 좋아요 랭킹
                </IconButton>
                <SelectLayout>
                    <SelectBox
                        options={options}
                        selectedOption={option}
                        _getOption={getOption}
                    />
                </SelectLayout>
            </IconLayout>
            <Layout>
                <Container>
                    <StyleTableName>
                        <Text>순위</Text>
                        <Text>닉네임</Text>
                        {page === 'investment' ? (
                            <Text>수익률</Text>
                        ) : (
                            <Text>좋아요</Text>
                        )}
                    </StyleTableName>{' '}
                    <PageLayer>
                        {page === 'investment' ? <Investment /> : null}
                        {page === 'like' ? <Like /> : null}
                    </PageLayer>
                </Container>

                <BadgeContainer>
                    <Medal />
                </BadgeContainer>
            </Layout>
        </>
    );
}

export default RankingMain;
const Layout = styled.div`
    display: flex;
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
    width: 48%;
    height: 35px;
    display: flex;
    align-items: center;
`;
const Icon = styled.div`
    align-items: center;
`;
const IconButton = styled.button`
    margin-left: 15px;
    font-weight: bold;
    display: flex;
    align-items: center;
    height: 40px;
    outline: none;
    color: ${props => props.theme.textColor};
    border-style: solid solid none solid;
    border-color: ${props => props.theme.borderColor};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${props =>
        props.current
            ? props.theme.buttonColor
            : props.theme.transparentButtonColor};
    transition: background-color ease-in-out 0.1s;
`;
const SelectLayout = styled.div`
    height: 35px;
    margin-bottom: 17px;
    margin-left: auto;
    display: flex;
    align-items: center;
`;
const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    display: flex;
    align-items: center;
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
const PageLayer = styled.div``;
