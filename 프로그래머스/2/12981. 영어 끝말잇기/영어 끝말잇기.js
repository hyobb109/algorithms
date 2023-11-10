function solution(n, words) {
    let len = words.length;
    let set = new Set();
    
    for (let i = 0; i < len; ++i) {
        let person = i % n + 1;
        let order = parseInt(i / n) + 1;
        if (i && words[i - 1].at(-1) !== words[i].at(0))
        return [person, order];
        set.add(words[i]);
        if (set.size !== i + 1) return [person, order];
    }
    
    return [0, 0];
}