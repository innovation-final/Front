import React, { useEffect, useState } from 'react';
import useGetPost from '../../hooks/useGetPost';
import BoardWrite from './BoardWrite';

function BoardEdit() {
    // const ref = useRef(null);

    const { data } = useGetPost();
    const editPost = data;

    // eslint-disable-next-line no-unused-vars
    const [originData, setOriginData] = useState();
    useEffect(() => {
        setOriginData(editPost);
    });

    return (
        <div>{originData && <BoardWrite isEdit originData={originData} />}</div>
    );
}

export default BoardEdit;
