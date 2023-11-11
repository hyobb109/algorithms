function solution(cards) {
    let score = [0, 0];
    let prev = new Set();
    for (let i = 0; i < cards.length; ++i) {
        let curr = cards[i];
        if (prev.has(curr)) continue;
        let set = new Set();
        while (!set.has(curr)) {
            set.add(curr);
            prev.add(curr);
            curr = cards[curr - 1];
        }
        score.push(set.size);
    }
    score.sort((a, b) => b - a);
    return score[1] ? score[0] * score[1] : 0
}