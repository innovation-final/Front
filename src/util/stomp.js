import * as StompJs from '@stomp/stompjs';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/user/userState';

// Header "Authorization" token 보내기

const WS_URL = process.env.REACT_APP_WEBSOCKET_URL;
let imageUrl = null;
let nickName = null;
let client = null;
let token = null;

export const setClient = _client => {
    client = _client;
};
export const setProfile = () => {
    const user = useRecoilState(userState);
    imageUrl = user.imageUrl;
    nickName = user.nickName;
    token = user.token;
};
export const getToken = () => {
    return token;
};
export const getImageUrl = () => {
    return imageUrl;
};
export const getNickName = () => {
    return nickName;
};

const subscribeCallback = (data, setChatList) => {
    setChatList(props => [...props, data]);
    const chatScreen = document.getElementById('chatting');
    setTimeout(() => {
        if (chatScreen !== null) chatScreen.scrollTop = chatScreen.scrollHeight;
    }, 100);
};

export const subscribe = setChatList => {
    client.current.subscribe(`/sub/chat`, body => {
        const jsonBody = JSON.parse(body.body);
        subscribeCallback(jsonBody, setChatList);
    });
};

export const publish = (ch, type) => {
    if (!client.current.connected) return;
    client.current.publish(
        {
            destination: '/pub/chat',
            body: JSON.stringify({
                type,
                sendTime: Date.now(),
                imageUrl,
                nickName,
                userId: '',
                message: ch,
            }),
        },
        { Authorization: token },
    );
};

export const connect = setChatList => {
    client.current = new StompJs.Client({
        brokerURL: WS_URL,
        onConnect: () => {
            console.log('success');
            subscribe(setChatList);
        },
    });
    client.current.activate();
    setTimeout(() => {
        publish(`${nickName}님이 입장하였습니다.`, 'ENTER');
    }, 500);
};

export const disconnect = () => {
    publish(`${nickName}님이 나가셨습니다.`, 'ENTER');
    setTimeout(() => {
        client.current.deactivate();
    }, 500);
};
