function solution(s) {    
    let cnt = 0;
    let removed = 0;
    while (s !== '1') {
        let len = s.split('').filter(c => c === '1').length;
        cnt += 1;
        removed += s.length - len;
        s = len.toString(2);
    }
    return [cnt, removed];
}