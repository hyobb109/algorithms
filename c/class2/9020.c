// 골드바흐의 추측

#include <stdio.h>

int t;
int n;

int isprime(int n)
{
    int i = 2;
    if (n <= 1)
        return 0;
    if (n % 2 == 0)
        return 0;
    while (i <= n / i)
    {
        if (n % i == 0)
            return 0;
        i++;
    }
    return 1;
}

int prev_prime(int n)
{
    if (isprime(n))
        return n;
    while (!isprime(n))
        n--;
    return n;
}

int main()
{
    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        scanf("%d", &n);
    }
    // printf("n = %d\n", n);
    // printf("prev_prime of n = %d\n", prev_prime(n));
    return 0;
}