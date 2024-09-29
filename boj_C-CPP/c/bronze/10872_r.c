#include <stdio.h>

int factorial(int N)
{
    if (N > 1)
        return (N * factorial(N - 1));
    return (1);
}

int main()
{
    int N;
    int res;
    scanf("%d", &N);
    res = factorial(N);
    printf("%d", res);
    return 0;
}