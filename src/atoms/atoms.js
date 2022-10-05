import { atom, selector } from 'recoil';

export const wideState = atom({
    key: 'wide',
    default: true,
});

export const slideState = atom({
    key: 'slide',
    default: 0,
});

export const isDarkState = atom({
    key: 'darkmode',
    default: false,
});

export const searchState = atom({
    key: 'search',
    default: '',
});

export const toggleLiveChat = atom({
    key: 'chat',
    default: false,
});

export const chatLogState = atom({
    key: 'chatlog',
    default: [],
});

export const slideSelector = selector({
    key: 'slideSelector',
    get: ({ get }) => {
        const index = get(slideState);
        return index;
    },
    set: ({ set }, newValue) => {
        const newIndex = (newValue + 1) % 5;
        set(slideState, newIndex);
    },
});
