import { useQuery, useQueryClient } from 'react-query';
import { stockAPI } from '../shared/api';

const useGetRelatedPosts = stockCode => {
    const options = {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 30,
        cacheTime: 1000 * 50,
        enabled: stockCode !== '',
    };
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(
        ['relatedPosts', stockCode],
        () => stockAPI.getStockPosts(stockCode),

        options,
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['relatedPosts', stockCode]);
    };

    return { data: data?.data.data, isLoading, invalidate };
};

export default useGetRelatedPosts;
