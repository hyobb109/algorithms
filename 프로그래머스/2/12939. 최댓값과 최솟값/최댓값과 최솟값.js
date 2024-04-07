function solution(s) {
    let arr = s.split(' ').map(Number).sort((a, b) => a - b);
    console.log(arr);
    let res = [arr[0], arr[arr.length - 1]].join(' ');
    return res;
}