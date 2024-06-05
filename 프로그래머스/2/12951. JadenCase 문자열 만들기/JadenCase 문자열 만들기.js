function solution(s) {
    let str = [...s];
    return str.map((char, idx) => {
        if (idx === 0 || str[idx - 1] === ' ') {
            return char.toUpperCase();
        }
        return char.toLowerCase();
    }).join('');
}