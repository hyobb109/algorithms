function solution(n) {
    // if (n === 1) return 1;
    let answer = 1;
    let mid = parseInt(n / 2);
    for (let i = 1; i <= mid; i++) {
        let start = i;
        let val = start;
        while (val < n) {
            val += ++start;
        }
        if (val == n) ++answer;
    }
    return answer;
}