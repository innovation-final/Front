import { useQuery, useQueryClient } from 'react-query';
import { stockAPI } from '../shared/api';

const useGetStockInfo = stockCode => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(
        ['stockInfo', stockCode],
        () => stockAPI.getStockDetail(stockCode),
        {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            staleTime: 1000 * 30,
            cacheTime: 1000 * 50,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['stockInfo', stockCode]);
    };

    return { data: data?.data.data, isLoading, invalidate };
};

export default useGetStockInfo;
