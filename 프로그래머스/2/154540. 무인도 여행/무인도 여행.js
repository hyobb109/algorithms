function solution(maps) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    const col_len = maps.length;
    const row_len = maps[0].length;
    let visited = new Array(col_len).fill(false).map(() => new Array(row_len).fill(false));
    let res = [];
    let q = [];
    for (let i = 0; i < col_len; ++i) {
        for (let j = 0; j < row_len; ++j) {
            if (visited[i][j] || maps[i][j] === 'X') continue;
            q.push([i, j]);
            visited[i][j] = true;
            let area = +maps[i][j];
            while (q.length) {
                let [x, y] = q.shift();
                for (let dir = 0; dir < 4; ++dir) {
                    let cx = x + dx[dir];
                    let cy = y + dy[dir];
                    if (cx < 0 || cy < 0 || cx >= col_len || cy >= row_len) continue;
                    if (visited[cx][cy] || maps[cx][cy] === 'X') continue;
                    q.push([cx, cy]);
                    area += +maps[cx][cy];
                    visited[cx][cy] = true;
                }
            }
            res.push(area);
        }
    }
    res.length ? res.sort((a, b) => a - b) : res = [-1]
    return res;
}