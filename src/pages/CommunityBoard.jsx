import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../component/layout/Layout';
import BoardCard from '../component/community/BoardCard';
import { getBoardpost } from '../redux/modules/postSlice';

function CommunityBoard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { post } = useSelector(state => state.post);
    // console.log('글확인', post);
    useEffect(() => {
        dispatch(getBoardpost());
    }, []);

    return (
        <Layout>
            <div style={{ display: 'flex', height: '50px' }}>
                <div
                    style={{
                        width: '100%',
                        marginLeft: '15px',
                        fontSize: '15px',
                        float: 'left',
                    }}
                >
                    <FormControl
                        variant="standard"
                        style={{
                            width: '100px',
                            fontSize: '15px',
                            float: 'left',
                        }}
                    >
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Age"
                        >
                            <MenuItem
                            //  value={10}
                            >
                                최신순
                            </MenuItem>
                            <MenuItem
                            // value={20}
                            >
                                좋아요순
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ height: '50px', float: 'right' }}>
                    <Button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => {
                            navigate('/communityboardwrite');
                        }}
                        aria-hidden="true"
                    >
                        글쓰기
                    </Button>
                </div>
            </div>

            {post.map(post => (
                <BoardCard post={post} key={post.id} />
            ))}
        </Layout>
    );
}

export default CommunityBoard;

const Button = styled.button`
    width: 90px;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #79a7ca;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    &:hover {
        background-color: #b2dbf4;
    }
`;
