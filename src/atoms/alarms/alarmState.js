import { atom } from 'recoil';

export const listeningState = atom({
    key: 'listen',
    default: false,
});

export const alarmState = atom({
    key: 'alarm',
    default: 0,
});
