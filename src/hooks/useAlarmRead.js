import { useQuery, useQueryClient } from 'react-query';
import { noticeAPI } from '../shared/api';

const useAlarmRead = () => {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery(['alarmRead'], () =>
        noticeAPI.getNoticeRead(),
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['alarmRead']);
    };

    return { data: data?.data.data, isLoading, invalidate };
};
export default useAlarmRead;
