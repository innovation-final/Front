import React, { useEffect } from 'react';
import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRecoilState } from 'recoil';
import { useMutation, useQueryClient } from 'react-query';
import Swal from 'sweetalert2';
import useAlarm from '../../hooks/useAlarm';
import NoticeList from './NoticeList';
import alarmState from '../../atoms/alarms/alarmState';
import useAlarmRead from '../../hooks/useAlarmRead';
import { noticeAPI } from '../../shared/api';

function Notice({ setModalOpen }) {
    const [alarmCount, setAlarmCount] = useRecoilState(alarmState);
    const notices = useAlarm();
    const read = useAlarmRead();
    const notice = notices.data;
    useEffect(() => {
        setAlarmCount(notice && notice.length);
    }, [notice, alarmCount, setAlarmCount]);

    const queryClient = useQueryClient();
    const deleteAlarm = () => {
        const response = noticeAPI.deleteNotice();
        return response;
    };

    const mutation = useMutation(() => deleteAlarm(), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('alarmNotice');
        },
    });

    const onPostDelete = () => {
        Swal.fire({
            title: '알림 비우시겠습니까?',
            text: '다시 되돌릴 수 없습니다.',
            imageUrl:
                'https://velog.velcdn.com/images/soonger3306/post/c9fc9802-cc28-4aaf-9951-8c0bdc06b812/image.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#ff6026',
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
            reverseButtons: true,
        }).then(result => {
            if (result.isConfirmed) {
                mutation.mutate();
                Swal.fire('삭제되었습니다.');
            }
        });
    };
    return (
        <Container>
            <DeleletButton onClick={onPostDelete}>
                <DeleteOutlineIcon name="postDeleteButton" />
            </DeleletButton>
            <ClearButton onClick={setModalOpen}>
                <ClearIcon />
            </ClearButton>
            <IconLayout>
                <NotificationsNoneIcon />
                <Text>알람</Text>
            </IconLayout>
            {notice &&
                notice.map(alarm => <NoticeList read={read} alarms={alarm} />)}
        </Container>
    );
}

export default Notice;
const DeleletButton = styled.div`
    position: absolute;
    right: 35px;
    top: 10px;
    color: #855a5a;
    &:hover {
        color: #a3a1a1;
    }
`;
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
    width: 400px;
    height: 300px;
    position: fixed;
    left: 63%;
    margin-top: 30px;
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
