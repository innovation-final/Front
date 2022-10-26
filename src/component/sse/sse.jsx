import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSetRecoilState } from 'recoil';
import { alarmState, listeningState } from '../../atoms/alarms/alarmState';
import useGetUser from '../../hooks/useGetUser';
import usePushNotification from '../../hooks/usePushNotification ';

function Sse() {
    const { data: user } = useGetUser();
    const setAlarmCount = useSetRecoilState(alarmState);
    const [listening, setListening] = useRecoilState(listeningState);
    const [, setData] = useState([]);
    const [, msetEventSource] = useState(undefined);

    const { fireNotificationWithTimeout } = usePushNotification();

    let eventSource = undefined;

    useEffect(() => {
        if (user && !listening) {
            eventSource = new EventSource(
                `${process.env.REACT_APP_URL}subscribe/${user?.id}`,
            );

            msetEventSource(eventSource);

            eventSource.onopen = event => {};

            eventSource.onmessage = event => {
                if (event.data === 'EventStream Created.') return;
                const pushMessage = JSON.parse(event.data);
                fireNotificationWithTimeout('STOCKS`TALK', 2000, {
                    body: pushMessage.message,
                });
                setData(old => [...old, event.data]);
                setAlarmCount(props => props + 1);
            };

            eventSource.onerror = event => {
                console.log(event.target.readyState);
                if (event.target.readyState === EventSource.CLOSED) {
                    console.log(
                        'eventsource closed (' + event.target.readyState + ')',
                    );
                }
                eventSource?.close();
            };

            setListening(true);
        }
    }, [user]);

    return <div style={{ display: 'none' }}></div>;
}

export default Sse;
