function solution(phone_book) {
    return !phone_book.sort().some((el, idx, arr) => arr[idx + 1]?.startsWith(el));
}