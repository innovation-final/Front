import { atom } from 'recoil';

export const toggleLiveChat = atom({
    key: 'chat',
    default: false,
});

export const chatLogState = atom({
    key: 'chatlog',
    default: [],
});
