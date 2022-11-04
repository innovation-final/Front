import React from 'react';
import styled from 'styled-components';

function Card({ name, url, position, img }) {
    return (
        <Container onClick={() => window.open(url)}>
            <ProfileImg src={img} />
            <Introduce>
                <IntroduceWrapper>
                    <Name>{`${name} (${position})`}</Name>
                    <GitHub>{`GitHub : ${url}`}</GitHub>
                </IntroduceWrapper>
            </Introduce>
        </Container>
    );
}

export default Card;

const Container = styled.div`
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-family: 'Pretendard-Regular';

    &:hover {
        scale: 1.1;
        transition: scale ease-in-out 0.1s;
    }
    cursor: pointer;
`;

const ProfileImg = styled.img`
    background-color: gray;
    width: 250px;
    height: 250px;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin-bottom: 10px;
`;

const Introduce = styled.div`
    width: 250px;
    height: 100px;
`;

const IntroduceWrapper = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
const Name = styled.div`
    color: black;
    font-size: 22px;
    margin-bottom: 10px;
`;
const GitHub = styled.div`
    color: black;
    letter-spacing: -1.5px;
    font-size: 15px;
`;
