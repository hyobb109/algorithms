# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
N = int(input())

events = []
for _ in range(N):
	 events.append(list(map(int, input().split())))

events.sort(key=lambda x: x[1])

cnt = 0
last_end = 0
for start, end in events:
	if start > last_end:
		cnt += 1
		last_end = end
	
print(cnt)

