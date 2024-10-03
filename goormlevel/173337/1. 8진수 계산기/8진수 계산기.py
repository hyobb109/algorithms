# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
N = int(input())
arr = list(map(int, input().split()))
res = oct(sum(arr))[2:]
print (res)