import { atom, selector } from 'recoil';

export const wideState = atom({
    key: 'wide',
    default: true,
});

export const slideState = atom({
    key: 'slide',
    default: 0,
});

export const slideStockState = atom({
    key: 'slide/stock',
    default: 0,
});

export const isDarkState = atom({
    key: 'darkmode',
    default: localStorage.getItem('app_theme'),
});

export const isDarkSelector = selector({
    key: 'darkModeSelector',
    get: ({ get }) => {
        const isDark = get(isDarkState);
        return isDark;
    },

    set: ({ set }) => {
        const currentTheme = localStorage.getItem('pushAlarm');

        set(
            isDarkState,
            currentTheme === 'lightMode' ? 'lightMode' : 'darkMode',
        );
    },
});

export const isPushState = atom({
    key: 'push',
    default: localStorage.getItem('pushAlarm'),
});

export const isPushSelector = selector({
    key: 'pushSelector',
    get: ({ get }) => {
        const isPush = get(isPushState);
        return isPush;
    },

    set: ({ set }) => {
        const currentPush = localStorage.getItem('pushAlarm');

        set(isPushState, currentPush === 'noPush' ? 'noPush' : 'push');
    },
});

export const modalGatherState = atom({
    key: 'modalGatherState',
    default: {
        levelUpModal: false,
        stepUpModal: false,
        editNicknameModal: false,
        editPhotoModal: false,
        profileMenuModal: false,
        friendAddModal: false,
        explainModal: false,
        researchPopup: false,
    },
});

export const slideSelector = selector({
    key: 'slideSelector',
    get: ({ get }) => {
        const index = get(slideState);
        return index;
    },
    set: ({ set }, newValue) => {
        const newIndex = newValue + 1;
        set(slideState, newIndex);
    },
});
