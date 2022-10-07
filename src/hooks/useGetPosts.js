import { useQuery, useQueryClient } from 'react-query';
import { postAPI } from '../shared/api';

const apiFilter = (filter, page) => {
    switch (filter) {
        case '좋아요순':
            return () => postAPI.getOrderedLikePosts(page - 1);
        case '오래된순':
            return () => postAPI.getOrderedOldPosts(page - 1);
        default:
            return () => postAPI.getPosts(page - 1);
    }
};

export default function useGetPosts(filter, page) {
    const queryClient = useQueryClient();

    const { data, isLoading, refetch } = useQuery(
        ['posts', filter],
        apiFilter(filter, page),
        {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 5000,
        },
    );

    const invalidate = () => {
        queryClient.invalidateQueries('posts');
    };

    return { data: data?.data.data, isLoading, invalidate, refetch };
}
