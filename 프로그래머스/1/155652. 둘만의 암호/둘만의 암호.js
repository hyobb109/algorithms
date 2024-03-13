function solution(s, skip, index) {
    const alpha = "abcdefghijklmnopqrstuvwxyz".split('').filter(c => !skip.includes(c))
    const password = s.split('').map(c => {
        const newIndex = (alpha.indexOf(c) + index) % alpha.length;
        return alpha.at(newIndex);
    }).join('');
    return password;
}