import { useQuery, useQueryClient } from 'react-query';
import { rankAPI } from '../shared/api';

const useLike = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, refetch } = useQuery(
        ['like'],
        () => rankAPI.getLike(),
        {
            refetchOnWindowFocus: false,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['like']);
    };

    return { data: data?.data.data, isLoading, invalidate, refetch };
};

export default useLike;
