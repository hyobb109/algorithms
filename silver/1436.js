// 영화감독 숌
const N = +require("fs").readFileSync("test.txt").toString().trim();
let titles = [];
let num = 666;
while (titles.length !== N) {
  if (num.toString().includes("666")) titles.push(num);
  num++;
}
console.log(titles[N - 1]);
