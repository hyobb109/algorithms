const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

N % 2 ? console.log('CY') : console.log('SK');