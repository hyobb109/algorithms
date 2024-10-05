from itertools import permutations    
    
def solution(k, dungeons):
    max_cnt = -1
    
    perms = list(permutations(dungeons,len(dungeons)))  
    for perm in perms:
        damage = k;
        cnt = 0
        for minimum, reduce in perm:
            if damage >= minimum:
                cnt += 1
                damage -= reduce
        if cnt > max_cnt: max_cnt = cnt
    return max_cnt