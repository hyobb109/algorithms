def solution(targets):
    cnt = 0
    targets.sort(key=lambda x: x[1])
    pos = 0
    for target in targets:
        if pos <= target[0]:
            pos = target[1]
            cnt += 1
    return cnt