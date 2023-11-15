function check(skills, map, tree) {
    let order = 0;
        for (let i = 0; i < tree.length; ++i) {
            if (!map.has(tree[i])) continue;
            if (map.get(tree[i]) > order) return 0;
            if (++order === skills) {
                return 1;
            };
        }
    return 1;
}


function solution(skill, skill_trees) {
    let cnt = 0;
    let skills = skill.length;
    let map = new Map();
    for (let i = 0; i < skills; ++i) {
        map.set(skill[i], i);
    }
    
    skill_trees.forEach((tree) => cnt += check(skills, map, tree));
    
    return cnt;
}