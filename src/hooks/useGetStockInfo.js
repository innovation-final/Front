import { useQuery, useQueryClient } from 'react-query';
import { stockAPI } from '../shared/api';

const useGetStockInfo = stockCode => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(
        ['stockInfo', stockCode],
        () => stockAPI.getStockDetail(stockCode),
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 120,
            refetchInterval: 1000 * 120,
            refetchIntervalInBackground: true,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['stockInfo', stockCode]);
    };

    return { data: data?.data?.data, isLoading, invalidate };
};

export default useGetStockInfo;
