N, K = map(int, input().split())
num = input()

stack = []
for digit in num:
  while stack and int(digit) > stack[-1] and K > 0:
    stack.pop()
    K -= 1
  stack.append(int(digit))
if K > 0: stack = stack[:-K]
print(''.join(map(str, stack)))