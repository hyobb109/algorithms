from collections import Counter

N, M = map(int, input().split())

cards = set()
cnt = 0
res = -1
for i in range(M):
	cards.add(input())
	if len(cards) <= N and res == -1:
		cnt += 1
		if len(cards) == N:
			res = cnt
	
print(res)