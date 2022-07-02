#include <stdio.h>

int main()
{
    int N;
    int count = 0;
    scanf("%d", &N);
    while (++count < 10)
        printf("%d * %d = %d\n", N, count, N * count);
}