// 팰린드롬 만들기
let name = require("fs").readFileSync("test.txt").toString().trim();
const len = name.length;
let map = new Map();
for (let i = 0; i < len; i++) {
  if (map.has(name[i])) {
    let cnt = map.get(name[i]);
    map.set(name[i], cnt + 1);
  } else {
    map.set(name[i], 1);
  }
}

function getPalindrome() {
  let cnt = 0;
  let str = "";
  let mid = "";
  for (const [key, val] of map) {
    if (len % 2 === 0 && val % 2) return "I'm Sorry Hansoo";
    else if (len % 2) {
      if (val % 2 && cnt === 1) return "I'm Sorry Hansoo";
      else if (val % 2) {
        mid = key;
        cnt++;
      }
    }
    str += key.repeat(val / 2);
  }
  let res = [...str].sort();
  let palindrome = res.join("") + mid + res.reverse().join("");
  return palindrome;
}

console.log(getPalindrome());
