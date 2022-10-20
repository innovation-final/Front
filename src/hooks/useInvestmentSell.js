import { useMutation, useQueryClient } from 'react-query';
import api from '../shared/api';

const useInvestmentSell = stockCode => {
    const queryClient = useQueryClient();

    const selectPriceSell = async req => {
        const response = await api.post(`/auth/sell/${stockCode}`, req);
        return response;
    };

    const selectPriceSellMutation = useMutation(req => selectPriceSell(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('mystock');
            queryClient.invalidateQueries(['account']);
            queryClient.invalidateQueries(['stocksAccount']);
        },
    });

    return {
        selectPriceSellMutation,
    };
};

export default useInvestmentSell;
