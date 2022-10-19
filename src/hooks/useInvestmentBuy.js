import { useMutation, useQueryClient } from 'react-query';
import api from '../shared/api';

const useInvestmentBuy = stockCode => {
    const queryClient = useQueryClient();

    const selectPriceBuy = async req => {
        const response = await api.post(`/auth/buy/${stockCode}`, req);
        return response;
    };

    const selectPriceBuyMutation = useMutation(req => selectPriceBuy(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('mystock');
            queryClient.invalidateQueries(['account']);
        },
    });

    return {
        selectPriceBuyMutation,
    };
};

export default useInvestmentBuy;
