import React from 'react';
import { RecoilRoot } from 'recoil';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactModal.setAppElement('#root');

root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
);
