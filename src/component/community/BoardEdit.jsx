import React, { useEffect, useState } from 'react';
import useGetPost from '../../hooks/useGetPost';
import BoardWrite from './BoardWrite';

function BoardEdit() {
    // const ref = useRef(null);

    const { data } = useGetPost();
    console.log(data);
    const editPost = data;

    // eslint-disable-next-line no-unused-vars
    const [originData, setOriginData] = useState();
    console.log(originData);
    useEffect(() => {
        setOriginData(editPost);
    });

    return (
        <div>{originData && <BoardWrite isEdit originData={originData} />}</div>
    );
}

export default BoardEdit;
