function solution(genres, plays) {
    let map = new Map();
    let trackMap = new Map();
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const playCnt = +plays[i];
        const val = map.get(genre);
        let trackList = trackMap.get(genre);
        if (!val) {
            map.set(genre, playCnt);
            trackMap.set(genre, [i]);
            continue;
        }
        map.set(genre, val + playCnt);
        trackList.push(i);
        trackList = trackList.sort((a, b) => plays[b] - plays[a]).slice(0, 2);
        trackMap.set(genre, trackList);
    }
    let arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    let answer = [];
    arr.forEach((genre) => {
        answer = answer.concat(trackMap.get(genre[0]));
    });
    return answer;
}