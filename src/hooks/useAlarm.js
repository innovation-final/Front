import { useQuery, useQueryClient } from 'react-query';
import { noticeAPI } from '../shared/api';

const useAlarm = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, refetch } = useQuery(
        ['alarmNotice'],
        () => noticeAPI.getNotice(),
        { staleTime: Infinity, cacheTime: Infinity },
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['alarmNotice']);
    };

    console.log(data?.data.data);

    return { data: data?.data.data, isLoading, invalidate, refetch };
};
export default useAlarm;
