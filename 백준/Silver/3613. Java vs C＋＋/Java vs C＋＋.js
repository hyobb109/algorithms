let input = require("fs").readFileSync('/dev/stdin').toString().trim();
function convertName(str) {
  // _로 시작하거나 끝나면 에러
  if (str.startsWith("_") || str.endsWith("_")) return "Error!";
  // C++ to Java
  if (str.includes("_")) {
    // _와 대문자가 같이 있으면 에러
    if (str.toLowerCase() !== str) return "Error!";
    let words = str.split("_");
    if (words.includes("")) return "Error!";
    let java = words.map((word, idx) => {
      // word.at(0) / word[0] 은 TypeError 발생함. 왜지??
      return idx === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
    });
    return java.join("");
  }
  // Java to C++
  let cpp = str[0];
  // 대문자로 시작하면 에러
  if (cpp.toLowerCase() !== cpp) return "Error!";
  for (let i = 1; i < str.length; ++i) {
    str[i].toLowerCase() !== str[i]
      ? (cpp += "_" + str[i].toLowerCase())
      : (cpp += str[i]);
  }
  return cpp;
}
console.log(convertName(input));
