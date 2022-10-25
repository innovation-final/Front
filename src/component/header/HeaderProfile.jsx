import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import useGetUser from '../../hooks/useGetUser';
import { userState } from '../../atoms/user/userState';
import Notice from '../notice/Notice';
import usePushNotification from '../../hooks/usePushNotification ';
import { alarmState } from '../../atoms/alarms/alarmState';

function HeaderProfile({ visible }) {
    const client = useQueryClient();
    const noticeData = client.getQueryData(['alarmNotice'])?.data.data;

    const { fireNotificationWithTimeout } = usePushNotification();
    const navigate = useNavigate();
    const { data, isLoading } = useGetUser();
    const id = data && data.id;
    const [user, setUser] = useRecoilState(userState);
    useEffect(() => {
        if (!isLoading && user) {
            setUser({
                ...data,
                token: localStorage.getItem('access-token'),
                isLogin: true,
            });
        }
    }, [isLoading]);

    const [listening, setListening] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [alarmData, setAlarmData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [meventSource, msetEventSource] = useState(undefined);
    // eslint-disable-next-line no-unused-vars
    const count = useRecoilValue(alarmState);
    // eslint-disable-next-line no-unused-vars
    const [alarmCount, setAlarmCount] = useState(
        Number(localStorage.getItem('newNoti')) || 0,
    );

    // 알림
    useEffect(() => {
        const eventSource =
            id &&
            new EventSource(`${process.env.REACT_APP_URL}subscribe/${id}`);

        if (id && !listening) {
            msetEventSource(eventSource);

            eventSource.onopen = () => {
                console.log('connection opened');
            };

            eventSource.onmessage = event => {
                setAlarmData(old => [...old, event.data]);
                setValue(event.data);
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

        // return () => {
        //     eventSource?.close();
        //     console.log('eventsource closed');
        // };
    }, [listening, id]);

    useEffect(() => {
        const shiftData = alarmData.slice(1);
        if (shiftData.length === 0) return;
        const newAlarmData = JSON.parse(shiftData.at(-1));
        fireNotificationWithTimeout('Stocks talk', 5000, {
            body: newAlarmData.message,
        });
        setAlarmCount(props => props + 1);
    }, [alarmData]);

    useEffect(() => {
        if (!localStorage.getItem('newNoti')) {
            localStorage.setItem('newNoti', 0);
            return;
        }
        localStorage.setItem('newNoti', alarmCount);
    }, [alarmCount, noticeData]);

    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);

    // 모달창 노출
    const showModal = () => {
        setModalOpen(props => !props);
        localStorage.setItem('newNoti', 0);
        setAlarmCount(0);
    };

    return (
        <StyleProfile visible={visible}>
            <ImageBox>
                <ProfileImage
                    onClick={() => {
                        navigate('/mypage');
                    }}
                    src={user.profileImg}
                />
            </ImageBox>
            <InfoBox>
                <ProfileInfo>
                    <Hello>어서오세요</Hello>
                    <UserName>{user.nickname}님!</UserName>
                </ProfileInfo>
            </InfoBox>
            <NotiBox>
                <Badge badgeContent={alarmCount} color="primary">
                    <NotificationsIcon onClick={showModal} />
                    <Notice setModalOpen={showModal} modalOpen={modalOpen} />
                </Badge>
            </NotiBox>
        </StyleProfile>
    );
}

export default HeaderProfile;

const StyleProfile = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    padding: 5px;

    display: ${props => (props.visible ? 'auto' : 'none')};
`;

const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;
const InfoBox = styled.div`
    position: relative;
    display: flex;
`;
const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 1px 1px 1px 1px gray;
    cursor: pointer;
`;
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 30px;
`;

const Hello = styled.div`
    font-size: 0.7vw;
`;
const UserName = styled.div`
    font-size: 0.7vw;
`;

const NotiBox = styled.div`
    padding-top: 0.7vw;
`;
