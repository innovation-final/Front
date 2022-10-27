import { useQuery, useQueryClient } from 'react-query';
import api from '../shared/api';

const useGetOrder = (startDate, endDate, isSigned, orderCategory) => {
    const queryClient = useQueryClient();

    const { data, isLoading, isError, refetch } = useQuery('order', () =>
        api.get(
            `auth/order?startDate=${startDate}&endDate=${endDate}&isSigned=${isSigned}&orderCategory=${orderCategory}`,
        ),
    );

    const invalidate = () => {
        queryClient.invalidateQueries('order');
    };

    return { data: data?.data.data, isLoading, isError, invalidate, refetch };
};

export default useGetOrder;
