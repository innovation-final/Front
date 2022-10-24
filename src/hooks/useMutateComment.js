import { useMutation, useQueryClient } from 'react-query';
import { commentAPI } from '../shared/api';

const useMutateComment = _id => {
    const queryClient = useQueryClient();

    const addComment = async req => {
        const response = await commentAPI.postComment(_id, req);
        return response;
    };

    const deleteComment = async () => {
        const response = await commentAPI.deleteComment(_id);
        return response;
    };
    const putComment = async req => {
        const response = await commentAPI.putComment(_id, req);
        return response;
    };

    const addMutation = useMutation(req => addComment(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });

    const deleteMutation = useMutation(() => deleteComment(_id), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });
    const editMutation = useMutation(req => putComment(req), {
        onError: error => console.log(error),
        onSuccess: () => {
            queryClient.invalidateQueries('post');
        },
    });

    return {
        addMutation,
        deleteMutation,
        editMutation,
    };
};

export default useMutateComment;
