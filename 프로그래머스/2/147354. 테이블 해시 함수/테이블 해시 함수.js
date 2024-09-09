function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => {
        const target = col - 1;
        if (a[target] === b[target]) return b[0] - a[0];
        return a[target] - b[target];
    });
    let res = 0;
    for (let i = row_begin - 1; i < row_end; i++) {
        res = res ^ data[i].reduce((acc, curr) => acc + curr % (i + 1), 0);
    }
    return res;
}