function solution(s){
    let open = 0;
    let len = s.length
    for (let i = 0; i < len; ++i) {
        if (s[i] == '(') open += 1;
        else {
            if (open < 1) return false;
            open -= 1;
        }
    }
    return open ? false : true
}