function checkStr(sArr) {
    let map = new Map([
        [']', '['],
        [')', '('],
        ['}', '{']
    ]);
    let opened = [];
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === '[' || sArr[i] === '(' || sArr[i] === '{') opened.push(sArr[i]);
        else if (map.get(sArr[i]) === opened[opened.length - 1]) opened.pop();
    }
    if (opened.length != 0) return false;
    return true;
}

function solution(s) {
    if (s.length % 2) return 0;
    let cnt = 0;
    let sArr = s.split('');
    for (let x = 0; x < s.length; x++) {
        if (checkStr(sArr)) ++cnt;
        sArr.push(sArr.shift());
    }
    return cnt;
}