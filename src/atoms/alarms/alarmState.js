import { atom } from 'recoil';

const alarmState = atom({
    key: 'alarm',
    default: 0,
});

export default alarmState;
