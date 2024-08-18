function solution(fees, records) {
    let res = [];    
    const getTimeDiff = (inTime, outTime) => {
        const inTimeToDate = new Date(`2024/08/15 ${inTime}:00`);
        const outTimeToDate = new Date(`2024/08/15 ${outTime}:00`);
        return (outTimeToDate - inTimeToDate) / (60 * 1000);
    }
    
    const getTotalFee = (time) => {
        let total = fees[1];
        const extraTime = time - fees[0];
        if (extraTime > 0) {
            total += Math.ceil(extraTime / fees[2]) * fees[3];
        }
        return total;
    }
    
    const paymentMap = new Map();
    records.map((record) => {
        const [time, car, log] = record.split(' ');
        const carNum = Number(car);
        const val = paymentMap.get(carNum);
        if (log === 'OUT') {            
            const parkingTime = val.totalMin + getTimeDiff(val.inTime, time);
            paymentMap.set(carNum, {inTime: null, totalMin: parkingTime});
        } else {
            val ? paymentMap.set(carNum, {inTime: time, totalMin: val.totalMin}) :
            paymentMap.set(carNum, {inTime: time, totalMin: 0});
        }
    });
    for (const [carNum, data] of paymentMap) {
        const {inTime, totalMin} = data;
        const totalFee = inTime ? getTotalFee(totalMin + getTimeDiff(inTime, '23:59')) : getTotalFee(totalMin);
        res.push([carNum, totalFee]);
    }
    return res.sort((a, b) => a[0] - b[0]).map(el => el[1]);
}