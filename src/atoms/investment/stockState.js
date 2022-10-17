import { atom } from 'recoil';

const currentStockCode = atom({
    key: 'stock/code',
    default: '000020',
});

export default currentStockCode;
