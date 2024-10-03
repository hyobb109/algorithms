# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
n = int(input())

val = 1
res = ''
for i in range(n):
	for j in range(n):
		res += str(val)
		if j != n - 1:
			res += ' '
		val += 1
	res += '\n'

print(res)