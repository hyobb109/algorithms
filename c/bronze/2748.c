// 피보나치 수열 2 (DP)
// 큰 수까지 고려해야 함
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n = 0;
    scanf("%d", &n);
	unsigned long long *fibo = (unsigned long long *)malloc(sizeof(unsigned long long) * (n + 1));
	fibo[0] = 0;
    fibo[1] = 1;
    for (int i = 2; i <= n; i++)
    {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    printf("%llu\n", fibo[n]);
    free(fibo);
    return 0;
}