function solution(maps) {
    const pos = {
        S: null, L: null, E: null
    };
    
    maps.forEach((line, col) => {
        const sIdx = line.indexOf('S');
        const lIdx = line.indexOf('L');
        const eIdx = line.indexOf('E');
        if (sIdx >= 0) pos.S = [col, sIdx];
        if (lIdx >= 0) pos.L = [col, lIdx];
        if (eIdx >= 0) pos.E = [col, eIdx];
    });
    
    const bfs = (start, end) => {
        let q = [pos[start]];
        // console.log(q);
        let cnt = 0;
        
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        const col = maps.length;
        const row = maps[0].length;
        let visited = maps.map((line) => line.split(''));
        visited[q[0][0]][q[0][1]] = 0;
        while(q.length) {
            const [x, y] = q.shift();
            // console.log(x, y);
            for (let i = 0; i < 4; i++) {
                const cx = x + dx[i];
                const cy = y + dy[i];
                // console.log(`cx: ${cx}, cy: ${cy}`);
                if (cx < 0 || cy < 0 || cx >= col || cy >= row) continue;
                if (maps[cx][cy] === 'X' || !isNaN(visited[cx][cy])) continue;
                if (maps[cx][cy] === end) return visited[x][y] + 1;
                visited[cx][cy] = visited[x][y] + 1;
                // console.log(visited);
                q.push([cx, cy]);
            }
        }
        return null;
    }
    const cnt1 = bfs('S', 'L');
    if (!cnt1) return -1;
    const cnt2 = bfs('L', 'E');
    return cnt2 ? cnt1 + cnt2 : -1;
}