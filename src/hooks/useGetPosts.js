import { useQuery } from 'react-query';
import { postAPI } from '../shared/api';

export default function useGetPosts(filter) {
    const options = {
        refetchOnWindowFocus: false,
    };
    switch (filter) {
        case '좋아요순': {
            return useQuery(
                'post',
                () => postAPI.getOrderedLikePosts(),
                options,
            );
        }
        case '오래된순': {
            return useQuery(
                'post',
                () => postAPI.getOrderedOldPosts(),
                options,
            );
        }
        default:
            return useQuery('post', () => postAPI.getPosts(), options);
    }
}
