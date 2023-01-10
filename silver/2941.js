// 크로아티아 알파벳
let str = require('fs').readFileSync('test.txt').toString().trim();
// let str = require('fs').readFileSync('/dev/stdin').toString().trim();

// 처음 푼 방법
const croatian1 = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let cnt = 0;
for (let i = 0; i < 8; i++) {
	while (str.includes(croatian1[i])) {
		str = str.replace(croatian1[i], '0');
		cnt++;
	}
}
str = str.replace(/0/g, '');
console.log(cnt + str.length);

// forEach 사용
const croatian2 = [/c=/g, /c-/g, /dz=/g, /d-/g, /lj/g, /nj/g, /s=/g, /z=/g];
croatian2.forEach(el => str = str.replace(el, '0'));
console.log(str.length);