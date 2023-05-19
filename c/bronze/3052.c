//나머지

#include <stdio.h>

int main()
{
    int cnt = 0;
    int num[10], mod[10];
    for (int i = 0; i < 10; i++)
    {
        scanf("%d", &num[i]);
        mod[i] = num[i] % 42;
    }
    for (int i = 0; i < 10; i++)
    {
        for (int j = 0; j < i; j++)
        {
            if (mod[i] == mod[j])
            {
                cnt++;
                break;
            }
        }
    }
    printf("%d", 10 - cnt);
}