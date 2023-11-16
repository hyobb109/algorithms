let input = require("fs").readFileSync("/dev/stdin").toString().trim();

function convertName(str) {
  // _로 시작하거나 끝나면 에러
  if (str.startsWith("_") || str.endsWith("_")) return "Error!";
  // C++ to Java
  if (str.includes("_")) {
    // _와 대문자가 같이 있으면 에러
    if (str.toLowerCase() !== str) return "Error!";
    let words = str.split("_");
    if (words.includes("")) return "Error!";
    for (let i = 1; i < words.length; ++i) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join("");
  }
  // Java to C++
  let res = str[0];
  // 대문자로 시작하면 에러
  if (res.toLowerCase() !== res) return "Error!";
  for (let i = 1; i < str.length; ++i) {
    str[i].toLowerCase() !== str[i]
      ? (res += "_" + str[i].toLowerCase())
      : (res += str[i]);
  }
  return res;
}
console.log(convertName(input));
