export const addZero = num => {
    if (num < 0) {
        return "00";
    } else if (num <= 9) {
        return String(`0${num}`);
    } else {
        return String(num);
    }
};

export const converter = num => {
    if (num >= 60) {
        return num - Math.floor(num / 60) * 60;
    }
    return String(num);
};
