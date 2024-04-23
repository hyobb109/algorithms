function solution(participant, completion) {
    let answer = '';
    let map = new Map();
    participant.forEach(p => {
        map.has(p) ? map.set(p, map.get(p) + 1) : map.set(p, 1);
    });
    completion.forEach(p => {
        const val = map.get(p);
        val > 1 ? map.set(p, val - 1) : map.delete(p);
    })
    return map.keys().next().value;
}