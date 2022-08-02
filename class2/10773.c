//제로
#include <stdio.h>

int main()
{
    int k = 0;
    int n = 0;
    int sum = 0;
    int j = 0;
    scanf("%d", &k);
    int tmp[100000] = {0, };
    for(int i = 0; i < k; i++)
    {
        scanf("%d", &n);
        if (n == 0)
            tmp[j--] = 0;
        else
            tmp[j++] = n;
    }
    for (int i = 0; i < j; i++)
        sum += tmp[i];
    printf("%d\n", sum);
}