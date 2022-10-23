import { atom } from 'recoil';

const tutorialState = atom({
    key: 'tutorial',
    default: false,
});

export default tutorialState;
