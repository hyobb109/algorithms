#include <stdio.h>

int main()
{
    int n;
    int res = 1;
    scanf("%d", &n);
    if (n < 2)
        printf("%d", 1);
    else
    {
        while (n > 0)
            res *= n--;
        printf("%d\n", res);
    }
    return 0;
}