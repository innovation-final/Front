import React, { useEffect } from 'react';
import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { useRecoilState } from 'recoil';
import ClearIcon from '@mui/icons-material/Clear';
// import useGetUser from '../../hooks/useGetUser';
import useAlarm from '../../hooks/useAlarm';
import NoticeList from './NoticeList';
// import { userState } from '../../atoms/user/userState';

// import usePushNotification from '../../hooks/usePushNotification ';

function Notice({ setModalOpen }) {
    // const { fireNotificationWithTimeout } = usePushNotification();
    // const { data } = useGetUser();
    // const id = data && data.id;
    const notices = useAlarm();
    const notice = notices.data;
    useEffect(() => {}, [notice]);

    // const [listening, setListening] = useState(false);
    // // eslint-disable-next-line no-unused-vars
    // const [alarmData, setAlarmData] = useState([]);
    // // eslint-disable-next-line no-unused-vars
    // const [value, setValue] = useState(null);
    // // eslint-disable-next-line no-unused-vars
    // const [meventSource, msetEventSource] = useState(undefined);

    // const isLogin = useRecoilState(userState);
    // console.log('wpq', isLogin[0].isLogin);

    // useEffect(() => {
    //     if (!listening) {
    //         const eventSource = new EventSource(
    //             `https://hakjoonkim.shop/api/subscribe/${id}`,
    //         );

    //         msetEventSource(eventSource);

    //         console.log('eventSource', eventSource);

    //         eventSource.onopen = () => {
    //             console.log('connection opened');
    //         };

    //         eventSource.onmessage = event => {
    //             setAlarmData(old => [...old, event.data]);
    //             setValue(event.data);
    //         };

    //         eventSource.onerror = event => {
    //             if (event.target.readyState === EventSource.CLOSED) {
    //                 console.log(
    //                     'eventsource closed ( + event.target.readyState + )',
    //                 );
    //             }
    //             eventSource.close();
    //         };

    //         setListening(true);
    //     }
    //     const eventSource = undefined;
    //     return () => {
    //         eventSource?.close();
    //         console.log('eventsource closed');
    //     };
    // }, []);

    // useEffect(() => {
    //     const shiftData = alarmData.slice(1);
    //     if (shiftData.length === 0) return;
    //     const newAlarmData = JSON.parse(shiftData.at(-1));
    //     fireNotificationWithTimeout('Stocks talk', 5000, {
    //         body: newAlarmData.message,
    //     });
    //     console.log('dd', shiftData);
    //     console.log('dd', newAlarmData);
    // }, [alarmData]);
    // const shiftData = alarmData.slice(1);
    return (
        <Container>
            <ClearButton onClick={setModalOpen}>
                <ClearIcon />
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
    background-color: #a3a1a1;
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
