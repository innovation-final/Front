import { atom } from 'recoil';

const loadingState = atom({
    key: 'graph/loading',
    default: true,
});

export default loadingState;
