function solution(want, number, discount) {
    let answer = 0;
    
    for (let day = 0; day < discount.length - 9; day++) {
        // console.log(discount.slice(day, day +  10));
        let period = discount.slice(day, day +  10).sort();
        let success = false;
        for (let i = 0; i < want.length; i++) {
            const product = want[i];
            const quantity = number[i];
            const startIndex = period.indexOf(product);
            const lastIndex = period.lastIndexOf(product);
            const cnt = lastIndex - startIndex + 1;
            // console.log(`day ${day} p ${product} cnt ${cnt}`);
            if (startIndex === -1 || cnt < quantity) break;
            if (i === want.length - 1) success = true;
        }
        if (success) ++answer;
    }
    return answer;
}