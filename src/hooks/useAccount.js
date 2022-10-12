import { useQuery, useQueryClient } from 'react-query';
import { bankAPI } from '../shared/api';

function useAccount() {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery(['account'], () =>
        bankAPI.getBankAccount(),
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['account']);
    };

    return { data: data?.data.data, isLoading, invalidate };
}

export default useAccount;
