// URLs 
const [N, ...URLs] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

// 맞음
function parsing(url) {
	let rgx = /^(http|ftp|gopher):\/\/([\w\-\.]+)(?::(\d+))?((?:\/\S+)*)?$/;
	let [, protocol, host, port, path] = url.match(rgx);
	if (port === undefined) port = '<default>';
	if (path === undefined) path = '<default>';
	else path = path.slice(1);
	return (`Protocol = ${protocol}\nHost     = ${host}\nPort     = ${port}\nPath     = ${path}\n`);
}

// 틀림...
function parsing(url){
	let [protocol, tmpUrl] = url.split('://');
	// console.log(tmpUrl);
	let portIdx = tmpUrl.indexOf(':');
	let pathIdx = tmpUrl.indexOf('/');
	let host = port = path = '<default>';
	// console.log(portIdx, pathIdx);
	if (portIdx === -1 && pathIdx === -1) host = tmpUrl;
	else if (pathIdx === -1) [host, port] = tmpUrl.split(':');
	else if (portIdx === -1 || portIdx > pathIdx) {
		host = tmpUrl.slice(0, pathIdx);
		path = tmpUrl.slice(pathIdx + 1);
	} else {
		host = tmpUrl.slice(0, portIdx);
		port = tmpUrl.slice(portIdx + 1, pathIdx);
		path = tmpUrl.slice(pathIdx + 1);
	}
	return (`Protocol = ${protocol}\nHost     = ${host}\nPort     = ${port}\nPath     = ${path}\n`);
}

let res = '';
for (let i = 0; i < +N; i++) {
	res += `URL #${i + 1}\n`;
	res += parsing(URLs[i]);
	if (i !== N - 1) res += '\n'
}

console.log(res);