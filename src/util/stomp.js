import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

let socket = null;
let stompClient = null;

// 연결
export const stompConnect = () => {
    socket = new SockJS('ws://hakjoonkim.shop/stomp');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, {}, onError);
};

// 연결 끊기
export const stompDisConnect = () => {
    stompClient.disconnect(stompChat.disSubscribeChat);
};

// 채팅 stomp
export const stompChat = {
    subscribeUrl: '/sub/chat',
    chatSendUrl: `/pub/chat`,
    // 구독
    subscribeChat: (data, setChatList) => {
        stompClient.subscribe(stompChat.subscribeUrl, response => {
            const newMessage = JSON.parse(response.body);
            setChatList(list => {
                return [...list, newMessage];
            });
        });
        stompChat.chatJoinMsg(data);
    },
    // // 구독 해제
    // disSubscribeChat: (token, data, subscribeId) => {
    //     stompChat.chatOutMsg(token, data);
    //     stompClient.unsubscribe(subscribeId);
    // },
    // 메세지 보내기
    chatSendMsg: (user, message) => {
        const msg = {
            type: 'TALK',
            sendTime: Date.now(),
            imageUrl: user.imageUrl,
            nickName: user.nickName,
            userId: user.userId,
            message,
        };
        stompClient.send(stompChat.chatSendUrl, JSON.stringify(msg));
    },
    // 참가 메세지
    chatJoinMsg: data => {
        const msg = {
            type: 'ENTER',
            userId: data.userId,
            nickName: data.nickName,
            imageUrl: data.imgUrl,
            sendTime: data.time,
            message: `${data.nickName}님이 참가하셨습니다.`,
        };
        stompClient.send(stompChat.chatSendUrl, JSON.stringify(msg));
    },
    // 퇴장 메세지
    chatOutMsg: data => {
        const msg = {
            type: 'ENTER',
            userId: data.userId,
            nickName: data.nickName,
            imageUrl: data.imgUrl,
            sendTime: data.time,
            message: `${data.nickName}님이 나가셨습니다.`,
        };
        stompClient.send(stompChat.chatSendUrl, JSON.stringify(msg));
    },
};

const onError = err => {
    console.log(err);
};

// // 알림
// export const stompNotice = {
//     subscribeUrl: '/sub/topic/stockhub/',
//     // 구독
//     subscribeNotice: (userId, setAlarmList) => {
//         stompClient.subscribe(stompNotice.subscribeUrl + userId, response => {
//             const newMessage = JSON.parse(response.body);
//             setAlarmList(list => {
//                 return [newMessage, ...list];
//             });
//         });
//     },
//     // 구독 취소
//     disSubscribeNotice: () => {
//         stompClient.unsubscribe('sub-0');
//     },
// };
