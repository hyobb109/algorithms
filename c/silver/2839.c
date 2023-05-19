// 설탕 배달
#include <stdio.h>

int main()
{
    int n = 0;
    int cnt = 0;
    scanf("%d", &n);
    while (1)
    {
        if (n % 5 == 0)
        {
            cnt += n / 5;
            break;
        }
        else
        {
            n -= 3;
            cnt++;
        }
        if (n == 0)
            break;
        if (n < 3)
        {
            cnt = -1;
            break;
        }
    }
    printf("%d\n", cnt);
}