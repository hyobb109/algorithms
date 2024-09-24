let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);

const getResult = () => {
  const visitors = input[1].split(" ").map(Number);
  let sum = visitors.slice(0, X).reduce((acc, curr) => acc + curr, 0);
  let res = [sum, 1];
  for (let i = X; i < N; i++) {
    sum += visitors[i] - visitors[i - X];
    if (sum === res[0]) res[1] += 1;
    else if (sum > res[0]) {
      res[0] = sum;
      res[1] = 1;
    }
  }
  return res[0] === 0 ? 'SAD' : res.join('\n');
};

console.log(getResult());
