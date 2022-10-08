export const esUSNumberParser = value => {
    if (!Number.isNaN(value)) {
        return value.toLocaleString('en-US');
    }
    return value;
};

export const toFixTwoPoint = value => {
    return (value * 100).toFixed(2);
};

export const millionUnit = value => {
    return Number((value / 1000000).toFixed(0));
};

export const dateParser = dateValue => {
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const day = String(date.getDate()).padStart(2, 0);

    return `${year}-${month}-${day}`;
};

export const arrowParser = value => {
    if (value === 0) return 'ㅡ';
    if (value < 0) return '▼';
    if (value > 0) return '▲';
    return value;
};

export const timeToToday = writeAt => {
    const createdAt = new Date(writeAt);
    const milliSeconds = new Date() - createdAt;
    const seconds = milliSeconds / 1000;
    const minutes = seconds / 60;

    if (minutes < 60)
        return `${Math.floor(minutes) === 0 ? 1 : Math.ceil(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
};
