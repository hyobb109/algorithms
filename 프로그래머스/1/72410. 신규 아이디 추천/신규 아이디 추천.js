function solution(new_id) {
    let id = new_id.toLowerCase();
    id = id.replaceAll(/[^\w._-]/g, '');
    id = id.replaceAll(/\.{2,}/g, '.');
    if (id.startsWith('.')) id = id.slice(1);
    if (id.endsWith('.')) id = id.slice(0, -1);
    if (id === '') id = 'a';
    if (id.length > 15) id = id.slice(0, 15);
    if (id.endsWith('.')) id = id.slice(0, -1);
    if (id.length === 2) id += id.at(-1);
    else if (id.length === 1) id += id.at(-1).repeat(2);
    return id;
}