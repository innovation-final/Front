import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { alarmOnState, notificationListState } from '../../atoms/atoms';
import { userAPI } from '../../shared/api';

function Notice() {
    const { data } = useQuery(['user'], () => userAPI.getNotice());
    console.log('알림', data);
    // eslint-disable-next-line no-unused-vars
    const [alarmList, setAlarmList] = useRecoilState(notificationListState);
    // const queryClient = useQueryClient();
    // eslint-disable-next-line no-unused-vars
    const [alarmOn, setAlarmOn] = useRecoilState(alarmOnState);

    // 알림페이지 API

    // eslint-disable-next-line no-unused-vars
    // const getAlarmReadQuery = useQuery('alarmReadLists', userAPI, {
    //     //     // 여기서 리코일에 저장
    //     onSuccess: data => {
    //         queryClient.invalidateQueries('alarmLists');
    //         setAlarmOn(false);
    //         console.log(data.data);
    //     },
    // });

    const eventSource = new EventSource(
        `https://hakjoonkim.shop/api/subscribe`,
    );
    console.log('숭어', eventSource);

    // 시간 변환
    function alarmTime(altime) {
        const alarmDate = altime.split('T')[0];
        const divide = altime.split('T')[1];
        const divideHour = Number(divide.split(':')[0]);
        const divideMin = divide.split(':')[1];

        if (divideHour > 12) {
            return `${alarmDate}  오후 ${divideHour - 12} : ${divideMin}`;
        }
        if (divideHour === 12) {
            return `${alarmDate}  오후 ${divideHour} : ${divideMin}`;
        }
        if (divideHour === 0) {
            return `${alarmDate}  오전 ${divideHour + 12} : ${divideMin}`;
        }
        return `${alarmDate}  오전 ${divideHour} : ${divideMin}`;
    }
    return (
        <AlarmBoxWrap>
            {alarmList.map(alarmcontent => {
                if (alarmcontent.type !== '채팅') {
                    return (
                        <AlarmBox>
                            <AlarmTextBox>
                                <EvRowBox
                                    style={{
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <EvImgBox
                                        height="0.625"
                                        url="url(/assets/yellowdot.svg)"
                                        margin="0.4375rem 0.625rem auto 0"
                                    />
                                    <AlarmFontBox>
                                        <AlarmFont>
                                            <span>[{alarmcontent.type}]</span>{' '}
                                            {alarmcontent.message}
                                        </AlarmFont>

                                        <AlarmDateFont>
                                            {alarmTime(
                                                alarmcontent.createdDate,
                                            )}
                                        </AlarmDateFont>
                                    </AlarmFontBox>
                                </EvRowBox>
                            </AlarmTextBox>
                        </AlarmBox>
                    );
                }
                return false;
            })}
        </AlarmBoxWrap>
    );
}

export default Notice;

const EvColumnBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.isAlignSide ? '' : 'center')};
    justify-content: ${props => (props.isContentSide ? '' : 'center')};
    width: ${props => props.width};
    height: ${props => props.height}rem;
    margin: ${props => props.margin};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    cursor: ${props => (props.isCursor ? 'pointer' : '')};
    background-image: ${props => props.url};
    background-repeat: no-repeat;
    background-size: ${props =>
        props.backgroundsize ? props.backgroundsize : 'cover'};
    background-position: center;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : ''};
`;

const EvRowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: ${props => (props.isAlignSide ? '' : 'center')};
    justify-content: ${props => (props.isContentSide ? '' : 'center')};
    width: ${props => props.width};
    height: ${props => props.height}rem;
    margin: ${props => props.margin};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius};
    cursor: ${props => (props.isCursor ? 'pointer' : '')};
    background-image: ${props => props.url};
    background-repeat: no-repeat;
    background-size: ${props =>
        props.backgroundsize ? props.backgroundsize : 'cover'};
    background-position: center;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : ''};
`;
const EvEnglishFont = styled.p`
    font-size: ${props => props.size}rem;
    font-family: ${props => (props.isBold ? 'OpensansBold' : 'OpensansMed')};
    color: ${props => (props.color ? props.color : '#1A1A1A')};
    display: flex;
    font-weight: ${props => (props.weight ? props.weight : 400)};
    text-align: ${props => (props.align ? props.align : '')};
    margin: 0;
    line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
`;
const EvImgBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.isAlignSide ? '' : 'center')};
    justify-content: ${props => (props.isContentSide ? '' : 'center')};
    width: ${props => props.width};
    height: ${props => props.height}rem;
    margin: ${props => props.margin};
    cursor: ${props => (props.isCursor ? 'pointer' : '')};
    background-image: ${props => props.url};
    background-repeat: no-repeat;
    background-size: ${props =>
        props.backgroundsize ? props.backgroundsize : 'cover'};
    background-position: center;
    background-color: ${props =>
        props.backgroundColor ? props.backgroundColor : ''};
    border: ${props => props.border};
`;
const AlarmBoxWrap = styled(EvColumnBox)`
    margin: 1.875rem auto;
    row-gap: 0.9375rem;
    width: 89%;
    /* background-color: pink; */
`;

const AlarmBox = styled(EvColumnBox)`
    background-color: #fffbe9;
    border-radius: 6px;
    padding: 1.5625rem 2.8125rem 1.5625rem 1.25rem;
    width: 100%;
    min-height: 5.75rem;
`;

const AlarmTextBox = styled(EvColumnBox)`
    /* background-color: #a3d7a3; */
    border-radius: 6px;
    width: 100%;
`;

const AlarmFontBox = styled(EvColumnBox)`
    /* background-color: white; */
    width: 80%;
    justify-content: flex-start;
    /* align-items: left;
  align-content: flex-start; */
`;

const AlarmFont = styled.p`
    font-size: 1rem;
    text-align: left;
    line-height: 24px;
    margin: auto auto auto 0;
    & > span:nth-of-type(1) {
        font-weight: 700;
        font-weight: 700;
        min-width: 50px;
        max-height: 15px;
    }
`;

const AlarmDateFont = styled(EvEnglishFont)`
    color: #989898;
    font-size: 0.75rem;
    line-height: 19px;
    margin: auto auto auto 0;
`;
