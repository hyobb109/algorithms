let n = +require("fs").readFileSync("/dev/stdin").toString().trim();

let res = [];
const star = "*";
for (let i = n; i > 0; --i) {
  res.push(star.repeat(i));
}
console.log(res.join("\n"));
