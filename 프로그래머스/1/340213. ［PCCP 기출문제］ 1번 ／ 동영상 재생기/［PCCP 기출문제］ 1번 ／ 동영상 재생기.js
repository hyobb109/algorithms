const getTime = (time) => {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
}

const getTimeToString = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let curr = getTime(pos);
    const opEndTime = getTime(op_end);
    const opStartTime = getTime(op_start);
    const videoEndTime = getTime(video_len);
    if (curr >= opStartTime && curr <= opEndTime) curr = opEndTime;
    commands.forEach((cmd) => {
        if (cmd === 'prev') {
            const prevPos = curr - 10;
            curr = prevPos < 0 ? 0 : prevPos;
        } else {
            const nextPos = curr + 10;
            curr = nextPos > videoEndTime ? videoEndTime : nextPos;
        }
        if (curr >= opStartTime && curr <= opEndTime) curr = opEndTime;
    });
    return getTimeToString(curr);
}