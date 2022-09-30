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
