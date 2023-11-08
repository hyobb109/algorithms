function solution(record) {
    let map = new Map();
    let logs = [];
    record.forEach((data) => {
        let [log, id, nickname] = data.split(' ');
        // console.log(`log: ${log} id: ${id} nickname: ${nickname}`);
        if (nickname && (log === 'Change' || log === 'Enter')) map.set(id, nickname);
    });
    record.forEach((data) => {
        let [log, id, nickname] = data.split(' ');
        if (log === 'Enter') {
            logs.push(`${map.get(id)}님이 들어왔습니다.`);
        } else if (log === 'Leave') {
            logs.push(`${map.get(id)}님이 나갔습니다.`)
        }
    });
    return logs;
}