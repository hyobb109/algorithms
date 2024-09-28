function solution(n, computers) {
    
    let visited = new Array(n).fill(false);
    const dfs = (v) => {
        console.log(v);
        visited[v] = true;
        for (let i = 0; i < n; i++) {
            if (visited[i] || i === v || computers[v][i] === 0) continue;
            dfs(i);
        }
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            cnt += 1;            
        }
    }
    return cnt;
}