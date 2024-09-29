// 팰린드롬수
#include <stdio.h>

int reverse(int n);

int main()
{
    int n = 0;
    while (scanf("%d", &n) != 0)
    {
        if (n == 0)
            break;
        if (n == reverse(n))
            printf("yes\n");
        else
            printf("no\n");
    }
    return 0;
}

int reverse(int n)
{
    int res = 0;
    int digit = 0;
    while(n != 0)
    {
        res = res * 10 + n % 10;
        n = n / 10;
    }
    return res;
}