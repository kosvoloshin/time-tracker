export const addZero = num => {
    if (num < 0) {
        return "00";
    } else if (num <= 9) {
        return String(`0${num}`);
    } else {
        return String(num);
    }
};

const converter = num => {
    if (num >= 60) {
        return num - Math.floor(num / 60) * 60;
    }
    return num;
};

export const tracker = (startTime, currentTime, pauseTime) => {
    let diffMilliseconds = currentTime - startTime;
    let diffSeconds = Math.floor(diffMilliseconds / 1000 - pauseTime);
    let diffMinutes = Math.floor(diffSeconds / 60);
    let diffHours = Math.floor(diffSeconds / 3600);

    return {
        hours: String(diffHours),
        minutes: String(converter(diffMinutes)),
        seconds: String(converter(diffSeconds)),
        milliseconds: String(diffMilliseconds),
    };
};
