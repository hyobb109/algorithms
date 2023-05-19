// 소수 찾기
#include <stdio.h>

int isprime(int);

int main()
{
    int n, x, count = 0;
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &x);
        if (isprime(x))
        {
            count++;
        }
    }
    printf("%d\n", count);
}

int isprime(int x)
{
    if (x == 1)
    {
        return 0;
    }
    for (int i = 2; i < 32; i++)
    {
        if (x % i == 0 && x != i)
        {
            return 0;
        }
    }
    return 1;
}