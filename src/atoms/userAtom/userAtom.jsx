import { atom, selector } from 'recoil';
import { useQuery } from 'react-query';

export const userInfoState = atom({
    key: 'user',
    default: {
        nickName: '',
        profileImage: '',
        loggedIn: false,
    },
});

export const userInfoSelector = atom({
    key: 'userSelector',
    get: ({ get }) => {},
});
