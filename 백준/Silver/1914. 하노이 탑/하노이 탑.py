def hanoi(a, b, n):
  if (n == 1):
    print("%d %d"%(a, b))
    return
  hanoi(a, 6-a-b, n-1)
  print("%d %d"%(a, b))
  hanoi(6-a-b, b, n-1)

n = int(input())
print(2**n -1)
if (n <= 20):
  hanoi(1, 3, n)