function countComb(map) {
    let res = 1;
    for (const [key, val] of map) {
        console.log(key, val);
        res *= (val + 1);
    }
    return res - 1;
}

function solution(clothes) {
    let answer = 0;
    let map = new Map();
    clothes.forEach(cloth => {
        const [name, type] = cloth;
        let val = map.get(type) || 0;
        map.set(type, val + 1);
    });
    return countComb(map);
}