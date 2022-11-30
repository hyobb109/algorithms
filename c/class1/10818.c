//최소, 최대
#include <stdio.h>

int main()
{
    int n, num;
    scanf("%d", &n);
    int min = 1000001;
    int max = -1000001;
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &num);
        if (num < min)
            min = num;
        if (num > max)
            max = num;
    }
    printf("%d %d", min, max);
}