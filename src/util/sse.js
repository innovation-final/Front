import { useState } from 'react';
import usePushNotification from '../hooks/usePushNotification ';

function alarmURL(_id) {
    return `https://hakjoonkim.shop/api/subscribe/${_id}`;
}

export default function SSE(_id) {
    const [listening, setListening] = useState(false);
    const [alarmData, setAlarmData] = useState([]);
    const [eventSource] = useState(new EventSource(alarmURL(_id)));
    const { fireNotificationWithTimeout } = usePushNotification();

    function connectSSE() {
        if (!listening) {
            eventSource.onopen = () => {
                console.log('connection opened', '한번만 가는지 ');
            };

            eventSource.onmessage = event => {
                setAlarmData(old => [...old, event.data]);
            };

            eventSource.onerror = event => {
                if (event.target.readyState === EventSource.CLOSED) {
                    console.log(
                        'eventsource closed ( + event.target.readyState + )',
                    );
                }
                eventSource.close();
            };

            setListening(true);
        }
        return eventSource;
    }

    function disconnectSSE() {
        eventSource?.close();
        setListening(false);
        console.log('eventsource closed');
    }

    function getAlarmData() {
        const shiftData = alarmData.slice(1);
        console.log(shiftData);
        if (shiftData.length === 0) return [];
        const newAlarmData = JSON.parse(shiftData.at(-1));
        return newAlarmData;
    }

    function pushAlarm() {
        fireNotificationWithTimeout('Stocks talk', 5000, {
            body: getAlarmData().message,
        });
        console.log(getAlarmData().message, 'd');
    }

    return { connectSSE, pushAlarm, getAlarmData, disconnectSSE };
}
