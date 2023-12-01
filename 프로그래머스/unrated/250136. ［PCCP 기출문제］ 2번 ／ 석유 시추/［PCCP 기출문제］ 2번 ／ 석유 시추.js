function bfs(land, n, m) {
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    let visited = new Array(n).fill(false).map(() => new Array(m).fill(false));
    let q = [];
    let line = new Array(m).fill(0);
    
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (visited[i][j] || !land[i][j]) continue;
            q.push([i, j]);
            visited[i][j] = true;
            let area = 1;
            let width = new Array(m).fill(false);
            while (q.length) {
                const [x, y] = q.shift();
                width[y] = true;
                for (let dir = 0; dir < 4; ++dir) {
                    const cx = x + dx[dir];
                    const cy = y + dy[dir];
                    if (cx < 0 || cy < 0 || cx >= n || cy >= m) continue;
                    if (visited[cx][cy] || !land[cx][cy]) continue;
                    ++area;
                    q.push([cx, cy]);
                    visited[cx][cy] = true;
                }
            }
            width.forEach((el, idx) => {
                if (el) line[idx] += area;
            })
        }
    }
    return Math.max(...line);
}

function solution(land) {
    return bfs(land, land.length, land[0].length);
}