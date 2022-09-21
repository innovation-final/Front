import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../component/layout/Layout';
import Button from '../component/elements/Button';
import Input from '../component/elements/Input';

function Home() {
    const location = useLocation();
    console.log(location);
    return (
        <Layout header sidebar>
            <Button> 엄청긴버튼을 만든다면 어떻게되나요 </Button>
            <Input />
        </Layout>
    );
}

export default Home;
