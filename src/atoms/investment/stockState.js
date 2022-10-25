import { atom } from 'recoil';

const currentStockCode = atom({
    key: 'stock/code',
    default: '005930',
});

export default currentStockCode;
