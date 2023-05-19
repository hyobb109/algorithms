// 이항계수 nCr과 같음
#include <stdio.h>

int factorial(int n)
{
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}

int main()
{
    int n = 0, k = 0, res = 0;
    scanf("%d %d", &n, &k);
    // k = 0 이면 1 출력
    if (k == 0)
    {
        printf("%d\n", 1);
        return 0;
    }
    res = factorial(n) / (factorial(k) * factorial(n - k));
    printf("%d\n", res);
}