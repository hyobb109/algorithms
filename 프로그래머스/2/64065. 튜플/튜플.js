function solution(s) {
    let combs = s.slice(2, s.length-2).split('},{');
    combs.sort((a, b) =>  a.length - b.length);
    let tuple = combs.map(el => el.split(','));
    let res = [];
    let set = new Set();
    tuple.forEach(comb => {
        comb.forEach((num) => {
            if (!set.has(num)) {
                set.add(num);
                res.push(+num);
            }
        })
    })
    return res;
}