import { useQuery, useQueryClient } from 'react-query';
import { rankAPI } from '../shared/api';

const useRank = () => {
    const queryClient = useQueryClient();

    const { data, isLoading, refetch } = useQuery(
        ['rank'],
        () => rankAPI.getRank(),
        {
            refetchOnWindowFocus: false,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['rank']);
    };

    return { data: data?.data.data, isLoading, invalidate, refetch };
};

export default useRank;
