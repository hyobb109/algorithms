// 비밀번호 만들기
let passwords = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");
passwords.pop();

let res = [];
passwords.forEach((password) => {
  if (
    // 모음 하나 반드시 포함
    !password.match(/[aieou]+/) ||
    // 모음 3개, 자음 3개 연속으로 오면 안 됨
    password.match(/[aieou]{3}/) ||
    password.match(/[^aieou]{3}/) ||
    // 같은 글자 연속 2번 안되지만 ee, oo는 허용
    password.match(/([^eo])\1/)
  )
    res.push(`<${password}> is not acceptable.`);
  else res.push(`<${password}> is acceptable.`);
});

console.log(res.join("\n"));
