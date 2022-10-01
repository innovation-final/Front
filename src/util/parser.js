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
