// 프린터 큐
#include <stdio.h>

void swap(int *a, int *b)
{
    int tmp = *a;
    *a = *b;
    *b = tmp;
}

int main()
{
    int t = 0;
    int n = 0;
    int m = 0;
    int x = 0;
    int sig[100] = {0, };
    int cnt[10] = {0, };


    scanf("%d", &t);
    for (int i = 0; i < t; i++)
    {
        scanf("%d %d", &n, &m);
        for (int j = 0; j < n; j++)
        {
            scanf("%d", &sig[j]);
            if (j == m)
            {
                x = j;
            }
        }
        for (int j = 0; j < n; j++)
        {
            if (sig[j] == j)
            {
                cnt[j]++;
            }
        }

    }


}