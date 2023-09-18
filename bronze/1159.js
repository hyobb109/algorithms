// 농구 경기
const [n, ...names] = require("fs")
  .readFileSync("sample.txt")
  .toString()
  .trim()
  .split("\n");

const GIVE_UP = "PREDAJA";
let cnts = new Array(26).fill(0);
names.forEach((name) => {
  const idx = name.charCodeAt(0) - 97;
  cnts[idx]++;
});
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let players = [];
cnts.forEach((cnt, idx) => {
  if (cnt >= 5) {
    players.push(alphabet[idx]);
  }
});
if (!players.length) console.log(GIVE_UP);
else console.log(players.sort((a, b) => a - b).join(""));
