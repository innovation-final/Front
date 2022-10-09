import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { postAPI } from '../shared/api';

const useGetPost = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();
    const { data, isLoading } = useQuery(['post', id], () =>
        postAPI.getPost(id),
    );

    const invalidate = () => {
        queryClient.invalidateQueries(['post']);
    };

    return { data: data?.data.data, isLoading, invalidate };
};

export default useGetPost;
