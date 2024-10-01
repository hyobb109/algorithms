import sys
S = int(sys.stdin.readline().rstrip())

cnt = 0
sum = 0

while True:
  cnt += 1
  sum += cnt
  if sum > S:
    break

print(cnt - 1)
