function solution(k, d) {
    let cnt = 0;
    for(let x = 0; x <= d; x += k) {
        const y = Math.floor(Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2)));
        cnt += Math.floor(y / k) + 1;
    }
    return cnt;
}