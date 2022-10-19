import { useQuery, useQueryClient } from 'react-query';
import { mypageAPI } from '../shared/api';

const useGetUser = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, refetch } = useQuery(
        ['user'],
        () => mypageAPI.getMypage(),
        {
            refetchOnWindowFocus: false,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['user']);
    };

    return { data: data?.data.data, isLoading, invalidate, refetch };
};

export default useGetUser;
