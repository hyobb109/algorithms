function solution(record) {
    let map = new Map();
    let logs = [];
    record.forEach((data) => {
        let [log, id, nickname] = data.split(' ');
        // console.log(`log: ${log} id: ${id} nickname: ${nickname}`);
        if (nickname && (log === 'Change' || log === 'Enter')) map.set(id, nickname);
        if (log === 'Enter') {
            logs.push(`${id}님이 들어왔습니다.`);
        } else if (log === 'Leave') {
            logs.push(`${id}님이 나갔습니다.`)
        }
    });
    let res = [];
    logs.forEach(log => {
        let id = log.slice(0, log.indexOf('님'));
        // console.log(id);
        res.push(log.replace(id, map.get(id)));
    });
    return res;
}