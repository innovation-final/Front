import { useQuery } from 'react-query';
import { postAPI } from '../shared/api';

export default function useGetPosts(filter, page) {
    const options = {
        refetchOnWindowFocus: false,
    };
    switch (filter) {
        case '좋아요순': {
            return useQuery(
                'post',
                () => postAPI.getOrderedLikePosts(page - 1),
                options,
            );
        }
        case '오래된순': {
            return useQuery(
                'post',
                () => postAPI.getOrderedOldPosts(page - 1),
                options,
            );
        }
        default:
            return useQuery('post', () => postAPI.getPosts(page - 1), options);
    }
}
