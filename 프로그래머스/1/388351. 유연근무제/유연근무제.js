function solution(schedules, timelogs, startday) {
    const allowedTimes = schedules.map((num) => {
        const timeToWork = num + 10;
        if (timeToWork % 100 >= 60) {
            return timeToWork + 40;
        }
        return timeToWork;
    });
    const getWeekendsIdx = () => {
        const sun = 7 - startday;
        const sat = sun === 0 ? 6 : sun - 1;
        return new Set([sat, sun]);
    }
    const weekends = getWeekendsIdx();
    const workersOnTime = timelogs.filter((worker, workerIdx) => {
        return worker.every((time, idx) => weekends.has(idx) ? true: time <= allowedTimes[workerIdx]);
    })
    return workersOnTime.length;
}