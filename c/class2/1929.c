// 소수 구하기
#include <stdio.h>
#include <math.h>

int prime(int n)
{
    if (n < 2)
        return 0
    // 제곱근까지만 해야 time out 발생 안 함
    for (int i = 2; i <= sqrt(n); i++)
    {
        if (n % i == 0)
            return 0;
    }
    return 1;
}

int main()
{
    int n = 0;
    int m = 0;
    scanf("%d %d", &m, &n);
    for(int i = m; i <= n; i++)
    {
        if (prime(i))
            printf("%d\n", i);
    }
}