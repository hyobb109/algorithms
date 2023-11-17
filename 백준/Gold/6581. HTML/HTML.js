let text = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/);

const hr = "-".repeat(80);
let res = [""];
let line = 0;
for (let i = 0; i < text.length; ++i) {
  if (text[i] === "<br>") {
    res.push("");
    ++line;
    continue;
  }
  if (text[i] === "<hr>") {
    if (res[line] === "") {
      res.pop();
      line--;
    }
    res.push(hr);
    ++line;
    res.push("");
    ++line;
    continue;
  }
  if (res[line] && res[line].length + text[i].length > 80) {
    res.push("");
    ++line;
  }
  res[line] += text[i] + " ";
}

console.log(res.map((el) => el.trim()).join("\n"));
