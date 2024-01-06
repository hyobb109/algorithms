function solution(name, yearning, photo) {
    let res = [];
    let map = new Map();
    name.forEach((person, idx) => map.set(person, yearning[idx]));
    photo.forEach((people) => {
        let total = 0;
        people.forEach((person) => {
            const score = map.get(person);
            if (score) total += score; 
        })
        res.push(total);
    })
    return res;
}