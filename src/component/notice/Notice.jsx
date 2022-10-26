import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Swal from 'sweetalert2';
import ClearIcon from '@mui/icons-material/Clear';
import { v4 as uuid } from 'uuid';
import useGetUser from '../../hooks/useGetUser';
import useAlarm from '../../hooks/useAlarm';
import NoticeList from './NoticeList';
import { noticeAPI } from '../../shared/api';

function Notice({ setModalOpen, modalOpen }) {
    const { data } = useGetUser();
    const id = data && data.id;
    const { data: notice, refetch } = useAlarm();
    const queryClient = useQueryClient();

    const deleteNotices = async () => {
        const response = noticeAPI.deleteNotice();
        return response;
    };

    const mutation = useMutation(() => deleteNotices(), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('alarmNotice');
        },
    });

    const onNoticeDelete = () => {
        Swal.fire({
            title: '알람 전부 비우시겠습니까?',
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
                mutation.mutate(id);
                Swal.fire('삭제되었습니다.');
            }
        });
    };

    useEffect(() => {
        refetch();
    }, [modalOpen, setModalOpen]);

    return (
        <Container modalOpen={modalOpen}>
            <DeleletButton onClick={onNoticeDelete}>
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
                notice.map(alarm => <NoticeList key={uuid()} alarms={alarm} />)}
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
    display: ${props => (props.modalOpen ? 'auto' : 'none')};
    width: 400px;
    height: 300px;
    position: fixed;
    background-color: ${props => props.theme.bgColor};
    left: 63%;
    margin-top: 30px;
    transform: translate(50%, 5%);
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
