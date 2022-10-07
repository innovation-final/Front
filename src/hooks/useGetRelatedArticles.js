import { useQuery, useQueryClient } from 'react-query';
import { stockAPI } from '../shared/api';

const options = {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 30,
    cacheTime: 1000 * 50,
};

const useGetRelatedArticles = stockCode => {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery(
        ['relatedArticles', stockCode],
        () => stockAPI.getStockArticle(stockCode),
        options,
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['relatedArticles', stockCode]);
    };

    return { data: data?.data.data, isLoading, invalidate };
};

export default useGetRelatedArticles;
