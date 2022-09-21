import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';

function BoardList() {
    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                    ...
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Age"
                >
                    <MenuItem value={10}>최신순</MenuItem>
                    <MenuItem value={20}>좋아요순</MenuItem>
                    <MenuItem value={30}>조회순</MenuItem>
                </Select>
            </FormControl>

            <Card className="card">
                <CardLayout className="card-body">
                    <CardTitle className="card-title">기아차오름ㅎㅎ</CardTitle>
                    <br />
                    <p className="card-text">종목:기아차</p>
                    <br />
                    <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                    </p>
                </CardLayout>
            </Card>

            <Card className="card">
                <CardLayout className="card-body">
                    <CardTitle className="card-title">기아차오름ㅎㅎ</CardTitle>
                    <br />
                    <p className="card-text">종목:기아차</p>
                    <br />
                    <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                    </p>
                </CardLayout>
            </Card>
            <Card className="card">
                <CardLayout className="card-body">
                    <CardTitle className="card-title">기아차오름ㅎㅎ</CardTitle>
                    <br />
                    <p className="card-text">종목:기아차</p>
                    <br />
                    <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                    </p>
                </CardLayout>
            </Card>
        </div>
    );
}

export default BoardList;

const CardTitle = styled.h5`
    font-size: 20px;
`;

const CardLayout = styled.h5`
    margin: 10px;
`;

const Card = styled.div`
    margin: 10px;
    height: 200px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #79a7ca;
    /* background-color: rgba(214, 227, 239, 0.468); */
    background-color: #93cce71b;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    &:hover {
        opacity: 0.7;
    }
`;
