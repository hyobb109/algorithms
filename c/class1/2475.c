//검증수
#include <stdio.h>
#include <math.h>

int main()
{
    int n;
    double res;

    for (int i = 0; i < 5; i++)
    {
        scanf("%d", &n);
        res += pow(n, 2);
    }
    printf("%d", (int)res % 10);
}