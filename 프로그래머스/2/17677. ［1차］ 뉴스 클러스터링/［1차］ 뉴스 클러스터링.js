function makeMap(str) {
    let arr = [];
    for (let i = 0; i < str.length - 1; i++) {
        const el = str.slice(i, i + 2);
        if (el.search(/[^(A-Z)]/) === -1)
            arr.push(str.slice(i, i + 2));
    }
    let map = new Map();
    for (const s of arr) {
        map.has(s) ? map.set(s, map.get(s) + 1) : map.set(s, 1);
    }
    return map
}

function solution(str1, str2) {
    let map1 = makeMap(str1.toUpperCase());
    let map2 = makeMap(str2.toUpperCase());
    let intersection = new Map();
    let union = new Map();
    for (const [key, val1] of map1) {
        const val2 = map2.get(key) | 0;
        if (val2 > 0) intersection.set(key, Math.min(val1, map2.get(key)));
        union.set(key, Math.max(val1, val2))
    }
    for (const [key, val2] of map2) {
        if (!intersection.has(key)) union.set(key, val2);
    }
    let A = 0;
    let B = 0;
    for (const [key, val] of intersection) {
        A += val;
    }
    for (const [key, val] of union) {
        B += val;
    }
    const J = (A === 0 && B === 0) ? 1 : A / B;
    return Math.floor(J * 65536);
}