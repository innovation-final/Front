import { atom, selector } from 'recoil';
import { stockAPI } from '../../shared/api';

export const currentStockCode = atom({
    key: 'stock/code',
    default: '000020',
});

export const currentStockState = atom({
    key: 'stock/state',
    default: {
        doneInterest: false,
        code: '000020',
        name: '동화약품',
        market: 'KOSPI',
        date: '2022-10-12',
        open: 8570,
        high: 8750,
        low: 8570,
        close: 8670,
        volume: 52761,
        tradingValue: 457160920,
        change: 0.0081,
        prevPrice: {
            date: '2022-10-11',
            open: 8650,
            high: 8660,
            low: 8450,
            close: 8600,
            volume: 105503,
            tradingValue: null,
            change: -0.01826484,
        },
    },
});

export const currentStockSelector = selector({
    key: 'stock/selector',
    get: async ({ get }) => {
        const code = get(currentStockCode);
        const response = await stockAPI.getStockDetail(code);
        return response.data.data;
    },
    set: ({ set }, newValue) => set(currentStockState, newValue),
});
