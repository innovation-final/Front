import { useQuery, useQueryClient } from 'react-query';
import { noticeAPI } from '../shared/api';

const useAlarm = () => {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery(['alarmNotice'], () =>
        noticeAPI.getNotice(),
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['alarmNotice']);
    };

    return { data: data?.data.data, isLoading, invalidate };
};
export default useAlarm;
