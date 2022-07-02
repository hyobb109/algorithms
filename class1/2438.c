#include <stdio.h>

int main()
{
    int N;
    scanf("%d", &N);
    int i = 0;
    while (++i <= N)
    {
        int j = 0;
        while (++j <= i)
            printf("*");
        printf("\n");
    }
}