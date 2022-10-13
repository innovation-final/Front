import { atom } from 'recoil';

export const seedMoneyState = atom({
    key: 'seedMoney',
    default: 5000000,
});
export const openTargetState = atom({
    key: 'targetRate',
    default: 0,
});
export const openExpireAtState = atom({
    key: 'openExpireAt',
    default: 30,
});
