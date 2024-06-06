function solution(maps) {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    let q = [];
    const n = maps.length;
    const m = maps[0].length;
    q.push([0, 0]);
    while (q.length) {
        const [x, y] = q.shift();
        for (let dir = 0; dir < 4; dir++) {
            const cx = x + dx[dir];
            const cy = y + dy[dir];
            if (cx < 0 || cy < 0 || cx >= n || cy >= m) continue;
            if (maps[cx][cy] !== 1) continue;
            maps[cx][cy] = maps[x][y] + 1;
            if (cx === n - 1 && cy === m - 1) return maps[cx][cy];
            q.push([cx, cy]);
        }
    }
    return -1;
}