import { useQuery, useQueryClient } from 'react-query';
import { stockAPI } from '../shared/api';

const useGetStockRank = criteria => {
    const queryClient = useQueryClient();

    const { data, isLoading, refetch } = useQuery(
        ['stocks', criteria],
        () => stockAPI.getStocks(criteria),
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 5000,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries('stocks');
    };

    return { data: data?.data.data, isLoading, invalidate, refetch };
};

export default useGetStockRank;
