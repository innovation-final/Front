import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ClearIcon from '@mui/icons-material/Clear';
import useGetUser from '../../hooks/useGetUser';
import useAlarm from '../../hooks/useAlarm';
import NoticeList from './NoticeList';

function Notice({ setModalOpen }) {
    const { data } = useGetUser();

    const id = data && data.id;
    const notices = useAlarm();
    const notice = notices.data;
    console.log(notice);
    useEffect(() => {}, [notice]);

    const closeModal = () => {
        setModalOpen();
    };

    const [listening, setListening] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [alarmData, setAlarmData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [meventSource, msetEventSource] = useState(undefined);
    // console.log(eventSource.url.slice(-3));
    // eventSource.onmessage = event => {
    //     console.log('성공', event.data);
    // };
    // eventSource.onerror = error => {
    //     eventSource.close();
    //     console.log(error.data);
    // };

    useEffect(() => {
        console.log('매번 실행되는지');
        console.log('listening', listening);

        if (!listening) {
            const eventSource = new EventSource(
                `https://hakjoonkim.shop/api/subscribe/${id}`,
            );

            msetEventSource(eventSource);

            console.log('eventSource', eventSource);

            eventSource.onopen = () => {
                console.log('connection opened');
            };

            eventSource.onmessage = event => {
                console.log('result', event.data);
                setAlarmData(old => [...old, event.data]);
                setValue(event.data);
            };

            eventSource.onerror = event => {
                console.log(event.target.readyState);
                if (event.target.readyState === EventSource.CLOSED) {
                    console.log(
                        'eventsource closed ( + event.target.readyState + )',
                    );
                }
                eventSource.close();
            };

            setListening(true);
        }
        const eventSource = undefined;
        return () => {
            eventSource?.close();
            console.log('eventsource closed');
        };
    }, []);

    useEffect(() => {
        console.log('data: ', alarmData);
    }, [alarmData]);

    // const checkData = () => {
    //     console.log(alarmData);
    // };
    // console.log(checkData);
    const eventSource = new EventSource(
        `https://hakjoonkim.shop/api/subscribe/${id}`,
    );
    eventSource.addEventListener('sse', function (event) {
        console.log(event.data);

        const datas = JSON.parse(event.data);

        (async () => {
            // 브라우저 알림
            const showNotification = () => {
                const notification = new Notification('코드 봐줘', {
                    body: datas.content,
                });

                setTimeout(() => {
                    notification.close();
                }, 10 * 1000);

                notification.addEventListener('click', () => {
                    window.open(datas.url, '_blank');
                });
            };

            // 브라우저 알림 허용 권한
            let granted = false;

            if (Notification.permission === 'granted') {
                granted = true;
            } else if (Notification.permission !== 'denied') {
                const permission = await Notification.requestPermission();
                granted = permission === 'granted';
            }

            // 알림 보여주기
            if (granted) {
                showNotification();
            }
        })();
    });

    return (
        <Container>
            <ClearButton>
                <ClearIcon onClick={closeModal} />
            </ClearButton>
            <IconLayout>
                <NotificationsNoneIcon />
                <Text>알람</Text>
            </IconLayout>

            {notice && notice.map(alarm => <NoticeList alarms={alarm} />)}
        </Container>
    );
}

export default Notice;
const ClearButton = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;

    color: #c7c7c7;
    &:hover {
        color: #a3a1a1;
    }
`;
const Container = styled.div`
    width: 300px;
    height: 300px;
    position: fixed;
    left: 72%;
    transform: translate(50%, 5%);
    background-color: #ffffff;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 8px;
    z-index: 30;
    overflow: scroll;
`;
const Text = styled.p`
    font-weight: bold;
    margin: 5px;
`;

const IconLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`;
