//평균
#include <stdio.h>
int main()
{
    int n, score;
    int sum = 0;
    int max = 0;

    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &score);
        sum += score;
        if (score > max)
        {
            max = score;
        }
    }
    double avg = ((double)sum / (double)max * 100) / (double)n;
    printf("%f\n", avg);
}