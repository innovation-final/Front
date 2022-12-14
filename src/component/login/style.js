import styled from 'styled-components';

export const LoginLayout = styled.div`
    position: relative;
    font-family: 'Roboto';
    width: 100vw;
    height: 100vh;
    background-color: skyblue;
    background-size: cover;
    display: flex;
    flex-direction: ${props => (props.isPC ? 'row' : 'column')};
    color: white;
    font-weight: bold;
    background-color: ${props => props.bgColor};
    background-image: url(https://velog.velcdn.com/images/soonger3306/post/84fae131-e251-45da-9c09-ae9266408ea0/image.png);
    .scroll {
        width: 2rem;
        position: absolute;
        bottom: 0%;
        left: 49%;
        z-index: 15px;
    }

    @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const ScrollLayout = styled.div`
    position: relative;
    font-family: 'Roboto';
    width: 100vw;
    height: 100vh;
    background-color: skyblue;
    background-size: cover;
    display: flex;
    flex-direction: ${props => (props.isPC ? 'row' : 'column')};
    color: white;
    font-weight: bold;
    background-color: ${props => props.bgColor};
    .scroll {
        width: 2rem;
        position: absolute;
        bottom: 0%;
        left: 49%;
        z-index: 15px;
    }

    @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }
`;

export const IntroduceLayout = styled.div`
    position: relative;
    font-family: 'Roboto';
    width: 100vw;
    height: 100vh;
    background-color: skyblue;
    background-size: cover;
    display: flex;
    flex-direction: ${props => (props.isPC ? 'row' : 'column')};
    color: white;
    font-weight: bold;
    background-color: ${props => props.bgColor};
    background-image: url(https://blog.kakaocdn.net/dn/cuxHLl/btrPyzl9vBB/kysaAxZZoUucOq6RQyHf50/img.jpg);
    .scroll {
        width: 2rem;
        position: absolute;
        bottom: 0%;
        left: 49%;
        z-index: 15px;
    }

    @media screen and (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const DivContent = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: auto;
    margin-bottom: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;

    h1 {
        color: white;
        font-size: 3rem;
        line-height: 1.5;
        margin-bottom: 1em;
    }
`;

export const DivButton = styled.div`
    display: flex;
    flex-direction: column;

    button {
        background: none;
        border: none;
        width: 250px;
        z-index: 1;
    }

    img {
        width: 100%;
    }
`;

export const GoogleBtn = styled.button`
    margin-left: 0.45rem;
    width: 237px !important;
    background-color: white !important;
    border: none;

    display: flex;
    align-items: center;

    border-radius: 0.5rem;
    height: 4rem;
    img {
        width: 1.5rem !important;
        object-fit: contain;
        margin-left: 0.9rem;

        margin-right: 1.6rem;
    }
    span {
        margin: 0 0.8rem;
        font-size: 18px;
    }
`;
