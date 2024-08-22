function solution(plans) {
    let done = [];
    let map = new Map();
    const compare = (a, b) => {
        if (a[1] > b[1])
            return 1;
        if (a[1] < b[1])
            return -1;
        return 0;
    }
    // 시간 순으로 정렬
    plans.sort(compare);
    // console.log(plans);
    let todos = [];
    for (let i = 0; i < plans.length; i++) {
        const [subject, start, timeLeft] = plans[i];
        todos.push({subject, timeLeft});
        
        const getTimeLeft = () => {
            if (i === plans.length - 1) return -1;
            const nextStartTime = plans[i + 1][1];
            const timeDiff = getTimeDiff(start, nextStartTime);
            // console.log(`timeDiff: ${timeDiff}`);
            return timeLeft - timeDiff;
        }
        let lastTodo = todos[todos.length - 1];
        lastTodo.timeLeft = getTimeLeft();
        let currTimeLeft = lastTodo.timeLeft;
        // console.log(`currTimeLeft: ${currTimeLeft}`);
        // console.log(todos);
        while (lastTodo.timeLeft <= 0) {
            done.push(todos.pop().subject);
            if (!todos.length) break;
            lastTodo = todos[todos.length - 1];
            lastTodo.timeLeft += currTimeLeft;
            currTimeLeft = lastTodo.timeLeft;
        }
    }
    
    while (todos.length) {
        done.push(todos.pop().subject);
    }
    return done;
}
    
function getTimeDiff(a, b) {
    if (!b) return null; 
    const aTime = new Date('January 31, 2024 '+ a);
    const bTime = new Date('January 31, 2024 '+ b);

    return (bTime - aTime) / (60 * 1000);
}