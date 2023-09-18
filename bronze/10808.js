// 알파벳 개수
const str = require("fs").readFileSync("sample.txt").toString().trim();

let cnts = new Array(26).fill(0);
for (let i = 0; i < str.length; i++) {
  const idx = str.charCodeAt(i) - 97;
  cnts[idx]++;
}

console.log(cnts.join(" "));
