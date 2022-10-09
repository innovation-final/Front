import React from 'react';
import Notice from '../component/notice/Notice';
import Layout from '../component/layout/Layout';

function NoticePage() {
    return (
        <Layout header sidebar>
            <Notice />
        </Layout>
    );
}

export default NoticePage;
