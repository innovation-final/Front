import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Medal from './Medal';
// import SelectBox from '../elements/SelectBox';
import Like from './rankings/Like';
import Investment from './rankings/Investment';
import useRank from '../../hooks/useRank';
import useLike from '../../hooks/useLike';
import MainContainer from '../main/MainContainer';
import { wideState } from '../../atoms/common/commonState';

function RankingMain() {
    const wide = useRecoilState(wideState);
    // const options = [
    //     { name: '실시간 순위', value: '실시간순위' },
    //     { name: '일주일 순위', value: '일주일순위' },
    //     { name: '한달 순위', value: '한달순위' },
    // ];
    // const defaultOption = '실시간순위';
    // const [option, setOption] = useState(defaultOption);
    // const getOption = selected => {
    //     setOption(selected);
    // };
    const [page, setPage] = useState('investment');

    const onClick = event => {
        setPage(event.target.value);
    };
    const { data } = useRank();
    const ranks = data && data;
    const like = useLike();
    const likes = like;
    const likeRank = likes && likes?.data;
    console.log(likeRank);
    return (
        <>
            <IconLayout $wide={wide}>
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
                {/* <SelectLayout>
                    <SelectBox
                        options={options}
                        selectedOption={option}
                        _getOption={getOption}
                    />
                </SelectLayout> */}
            </IconLayout>
            <MainContainer>
                <Container>
                    <StyleTableName>
                        <Text>순위</Text>
                        <Profile>닉네임</Profile>
                        {page === 'investment' ? (
                            <Text>수익률</Text>
                        ) : (
                            <Text>좋아요</Text>
                        )}
                        {/* {page === 'investment' ? <Text>손익(원)</Text> : null} */}
                    </StyleTableName>{' '}
                    <PageLayer>
                        {page === 'investment' ? (
                            <Investment ranks={ranks} />
                        ) : null}
                        {page === 'like' ? <Like likeRank={likeRank} /> : null}
                    </PageLayer>
                </Container>

                <BadgeContainer>
                    <Medal ranks={ranks} />
                </BadgeContainer>
            </MainContainer>
        </>
    );
}

export default RankingMain;

const Container = styled.div`
    width: 100%;
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
    width: 100%;
    padding: 2rem;
    border-radius: 20px;
    min-height: 40.7rem;
    display: flex;
    flex-direction: column;
`;
const IconLayout = styled.div`
    display: flex;
    height: 20px;
    margin-top: 30px;
    margin-left: 20px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

    @media screen and (min-width: 1400px) {
        grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    }
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

const Text = styled.p`
    font-weight: bold;
    margin: 5px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.textColor};
`;
const Profile = styled.p`
    font-weight: bold;
    margin: 5px;
    margin-left: 15px;
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
