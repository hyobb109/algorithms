function solution(A,B){
    A.sort((a, b) => a -b);
    B.sort((a, b) => b - a);
    let res = 0;
    A.forEach((num , i) => res += num * B[i]);
    return res;
}