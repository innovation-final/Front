import { useQuery, useQueryClient } from 'react-query';
import { stockAPI } from '../shared/api';

const useGetFinancial = stockCode => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(
        ['table', stockCode],
        () => stockAPI.getStockTable(stockCode),
        {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchInterval: false,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['table', stockCode]);
    };

    return { data: data?.data.data, isLoading, invalidate };
};

export default useGetFinancial;
