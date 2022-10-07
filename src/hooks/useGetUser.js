import { useQuery, useQueryClient } from 'react-query';
import { mypageAPI } from '../shared/api';

const useGetUser = () => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(['user'], () => mypageAPI.getMypage());

    const invalidate = () => {
        queryClient.invalidateQueries(['user']);
    };

    return { data: data?.data.data, isLoading, invalidate };
};

export default useGetUser;
