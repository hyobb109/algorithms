function solution(arr)
{
    let res = arr.filter((num, i, numbers) => {
        if (i === 0) return true;
        return numbers[i - 1] !== num;
    })
    return res;
}