import React, { useEffect } from 'react';
import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ClearIcon from '@mui/icons-material/Clear';
import { v4 as uuid } from 'uuid';
import useGetUser from '../../hooks/useGetUser';
import useAlarm from '../../hooks/useAlarm';
import NoticeList from './NoticeList';
import sse from '../../util/sse';

function Notice({ setModalOpen }) {
    const { data } = useGetUser();
    const id = data && data.id;
    const notices = useAlarm();
    const notice = notices.data;
    const SSE = sse(id);
    useEffect(() => {
        SSE.connectSSE();
        return () => SSE.disconnectSSE();
    }, []);

    useEffect(() => {
        if (SSE.getAlarmData().length === 0) {
            console.log(SSE.getAlarmData());
            return;
        }
        SSE.pushAlarm();
    }, [notice, SSE]);

    return (
        <Container>
            <ClearButton onClick={setModalOpen}>
                <ClearIcon />
            </ClearButton>
            <IconLayout>
                <NotificationsNoneIcon />
                <Text>알람</Text>
            </IconLayout>

            {notice &&
                notice.map(alarm => <NoticeList key={uuid()} alarms={alarm} />)}
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
