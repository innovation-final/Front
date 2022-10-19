import { useQuery, useQueryClient } from 'react-query';
import { bankAPI } from '../shared/api';

function useStocksAccount() {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery(['stocksAccount'], () =>
        bankAPI.getStocksAccount(),
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['stocksAccount']);
    };

    return { data: data?.data.data, isLoading, invalidate };
}

export default useStocksAccount;
