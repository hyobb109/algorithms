let answer = [];

function hanoi(num, a, b) {
    if (num == 1) {
        answer.push([a, b]);
        return;
    }
    hanoi(num -1, a, 6 - a - b);
    answer.push([a, b]);
    hanoi(num -1, 6 - a - b, b);
}

function solution(n) {
    hanoi(n, 1, 3);
    return answer;
}