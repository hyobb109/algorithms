function solution(prices) {
    let res = [];
    prices.forEach((price, idx) => {
        let cnt = 0;
        for (let i = idx + 1; i < prices.length; i++) {
            ++cnt;
            if (prices[i] < price) break;
        }
        res.push(cnt);
    });
    return res;
}