// 단어정렬 (sort 한번에 하는 방법 찾아보기!)
// input 받을 때 trim()으로 앞, 뒤 공백 제거!
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('sample.txt').toString().trim().split('\n');

function compare(x, y) {
  len1 = x.length;
  len2 = y.length;
  if (len1 != len2)
    return (len1 - len2);
  return (0);
}

input.shift();
let words = Array.from(new Set(input)); // Set으로 중복 제거 -> 다시 배열로
words.sort().sort(compare); // 먼저 유니코드 순 정렬 후 다시 길이대로 정렬
console.log(words.join('\n'));