def solution(number, k):
    answer = ''
    arr = [];
    for digit in number:
        while arr and int(digit) > arr[-1] and k > 0:
            arr.pop()
            k -= 1
        arr.append(int(digit))
    if (k > 0): arr = arr[:-k]
    return ''.join(map(str, arr))