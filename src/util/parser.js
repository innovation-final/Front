export const esUSNumberParser = value => {
    if (!Number.isNaN(value)) {
        return value.toLocaleString('en-US');
    }
    return value;
};

export const toFixTwoPoint = value => {
    return (value * 100).toFixed(2);
};
