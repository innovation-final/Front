import { atom } from 'recoil';

/* eslint-disable import/prefer-default-export */
export const userState = atom({
    key: 'user',
    default: {
        nickname: '닉네임',
        profileImg:
            'https://stockstock.s3.ap-northeast-2.amazonaws.com/b4e01caa.png',
        email: 'test1@test.com',
        totalReturnRate: 0.0,
        achievements: [],
        token: '',
    },
});
