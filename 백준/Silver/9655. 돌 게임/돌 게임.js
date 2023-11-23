let n = +require('fs').readFileSync('/dev/stdin').toString().trim();

n % 2 ? console.log('SK') : console.log('CY');
