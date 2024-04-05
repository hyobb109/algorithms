function solution(n) {
    if (n === 1) return 1;
    let answer = 0;
    let mid = parseInt(n / 2);
    for (let i = 1; i < mid; i++) {
        let start = i;
        let val = start;
        while (val < n) {
            val += ++start;
        }
        if (val == n) ++answer;
    }
    answer += n % 2 == 1 ? 2 : 1;
    return answer;
}