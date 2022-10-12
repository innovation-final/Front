import { atom } from 'recoil';

/* eslint-disable import/prefer-default-export */
export const searchState = atom({
    key: 'search',
    default: '',
});
