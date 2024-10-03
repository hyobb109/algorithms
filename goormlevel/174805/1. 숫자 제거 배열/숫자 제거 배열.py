# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
N, K = input().split()
arr = list(input().split())

res = list(filter(lambda x : K not in x, arr))
print(len(res))

