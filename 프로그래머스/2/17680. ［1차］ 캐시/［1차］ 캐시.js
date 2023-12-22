function solution(cacheSize, cities) {
    if (!cacheSize) return cities.length * 5;
    let cache = new Map();
    let order = new Map();
    let runtime = 0;
    cities.forEach((city, idx) => {
        const CITY = city.toUpperCase();
        let used = cache.get(CITY);
        // 캐시에 저장되어 있다면 순서만 갱신
        if (used !== undefined) {
            runtime += 1;
            order.delete(cache.get(CITY));
            order.set(idx, CITY);
            cache.set(CITY, idx);
        } 
        else {
            if (cache.size >= cacheSize) {
                // order에서 가장 작은 value를 가져와서 캐시에서 지움
                let min = Math.min(...cache.values());
                let cityToDelete = order.get(min);
                cache.delete(cityToDelete);
                order.delete(min);
            }
            cache.set(CITY, idx);
            order.set(idx, CITY);
            runtime += 5;
        }
    })
    return runtime;
}