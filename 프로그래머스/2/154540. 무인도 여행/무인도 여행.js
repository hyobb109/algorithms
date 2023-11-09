function solution(maps) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const col_len = maps.length;
    const row_len = maps[0].length;
    let res = [];
    let q = [];
    let map = maps.map(el => el.split(""));
    for (let i = 0; i < col_len; ++i) {
        for (let j = 0; j < row_len; ++j) {
            if (map[i][j] === 'X') continue;
            q.push([i, j]);
            let area = +map[i][j];
            map[i][j] = 'X';
            while (q.length) {
                let [x, y] = q.shift();
                for (let dir = 0; dir < 4; ++dir) {
                    let cx = x + dx[dir];
                    let cy = y + dy[dir];
                    if (cx < 0 || cy < 0 || cx >= col_len || cy >= row_len) continue;
                    if (map[cx][cy] === 'X') continue;
                    q.push([cx, cy]);
                    area += +map[cx][cy];
                    map[cx][cy] = 'X';
                }
            }
            res.push(area);
        }
    }
    res.length ? res.sort((a, b) => a - b) : res = [-1]
    return res;
}