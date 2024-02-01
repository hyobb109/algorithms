function getWord(word, str) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    if (word.length == 5) {
        return;
    }
    for (let i = 0; i < 5; i++) {
        word.push(vowels[i]);
        ++cnt;
        if (word.join('') == str) {
            ans = cnt;
        };
        getWord(word, str);
        word.pop();
    }
}

let cnt = 0;
let ans = 0;
function solution(word) {
    getWord([], word);
    return ans;
    
}