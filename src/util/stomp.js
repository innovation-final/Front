import * as StompJs from '@stomp/stompjs';

export const imageUrl = localStorage.getItem('imgUrl');
export const nickName = localStorage.getItem('nickName');
export const token = localStorage.getItem('access-token');
let client = null;

export const setClient = _client => {
    client = _client;
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
    client.current.publish({
        destination: '/pub/chat',
        body: JSON.stringify({
            type,
            sendTime: Date.now(),
            imageUrl,
            nickName,
            userId: '',
            message: ch,
        }),
    });
};

export const connect = setChatList => {
    client.current = new StompJs.Client({
        brokerURL: 'ws://hakjoonkim.shop/stomp',
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
