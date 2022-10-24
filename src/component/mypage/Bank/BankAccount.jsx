import React from 'react';
import styled from 'styled-components';
import useAccount from '../../../hooks/useAccount';
import BankSpinner from './BankSpinner';
// import './firework.css';

function BankAccount() {
    const { data } = useAccount();

    if (!data) return <BankSpinner />;

    const accountNumber =
        data &&
        data.accountNumber
            .toString()
            .replace(/(\d)(?=(?:\d{5})+(?!\d))/g, '$1-');

    const createdAt = data && data.createdAt.substr(0, 10);
    const expireAt = data && data.expireAt.substr(0, 10);
    const seedMoney = data && data.seedMoney.toLocaleString();
    const balance = data && data.balance.toLocaleString();
    const targetReturnRate = data && data.targetReturnRate;
    const totalReturnRate = data && data.totalReturnRate;
    const totalProfit = data && data.totalProfit.toLocaleString();
    const totalRealizedProfit =
        data && data.totalRealizedProfit.toLocaleString();

    // const particles = [];
    // const colors = ['#eb6383', '#fa9191', '#ffe9c5', '#b4f2e1'];
    // function pop() {
    //     for (let i = 0; i < 150; i += 1) {
    //         const p = document.createElement('particule');
    //         p.x = window.innerWidth * 0.5;
    //         p.y = window.innerHeight + Math.random() * window.innerHeight * 0.3;
    //         p.vel = {
    //             x: (Math.random() - 0.5) * 10,
    //             y: Math.random() * -20 - 15,
    //         };
    //         p.mass = Math.random() * 0.2 + 0.8;
    //         particles.push(p);
    //         p.style.transform = `translate(${p.x}px, ${p.y}px)`;
    //         const size = Math.random() * 15 + 5;
    //         p.style.width = `${size}px`;
    //         p.style.height = `${size}px`;
    //         p.style.background =
    //             colors[Math.floor(Math.random() * colors.length)];
    //         document.body.appendChild(p);
    //     }
    // }

    // function render() {
    //     for (let i = particles.length - 1; i > -1; i -= 1) {
    //         const p = particles[i];
    //         p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;

    //         p.x += p.vel.x;
    //         p.y += p.vel.y;

    //         p.vel.y += 0.5 * p.mass;
    //         if (p.y > window.innerHeight * 2) {
    //             p.remove();
    //             particles.splice(i, 1);
    //         }
    //     }
    //     requestAnimationFrame(render);
    // }

    // //
    // // window.addEventListener('click', pop);

    // useEffect(() => {
    //     pop();
    //     window.setTimeout(render, 700);
    // }, []);
    return (
        <ContentLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    계좌
                </Text>
                <Content> {accountNumber}</Content>
            </TextLayout>{' '}
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    계좌 만기일
                </Text>
                <Content>
                    {createdAt} ~ {expireAt}
                </Content>
            </TextLayout>
            <TextLayout>
                <Text>시드머니</Text>
                <Content>{seedMoney}원</Content>
            </TextLayout>
            <TextLayout>
                <Text>현재머니</Text>
                <Content>{balance}원</Content>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    목표 수익률
                </Text>
                <Content>{targetReturnRate}%</Content>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    현재 수익률
                </Text>
                <Content>{totalReturnRate}%</Content>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    평가손익
                </Text>
                <Content>{totalProfit}원</Content>
            </TextLayout>
            <TextLayout>
                <Text gutterBottom variant="h5" component="div">
                    실현손익
                </Text>
                <Content>{totalRealizedProfit}원</Content>
            </TextLayout>
        </ContentLayout>
    );
}

export default BankAccount;

const ContentLayout = styled.div`
    padding-left: 20px;
    margin: 20px;
    padding-top: 2%;
    overflow: hidden;
`;
const TextLayout = styled.div`
    padding: 2px;
    display: flex;
`;
const Text = styled.p`
    font-weight: bold;
    font-size: 2vmin;
    overflow: hidden; // 을 사용해 영역을 감출 것
    text-overflow: ellipsis; // 로 ... 을 만들기
    white-space: nowrap;
    margin-left: 20px;
    line-height: 2vmin;
    color: ${props => props.theme.textColor};
    word-break: break-all;
    width: 300px;
    flex-grow: ${props => props.flexRatio};
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Content = styled.p`
    font-weight: bold;
    margin-left: 20px;
    width: 400px;
    font-size: 2vmin;
    line-height: 2vmin;
    color: ${props => props.theme.textColor};
    display: flex;
    flex-direction: row;
    padding: 5px;
`;
