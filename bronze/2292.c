// 벌집 - 계차수열 활용! An = A1 + Bn
#include <stdio.h>
long long seq(int i);

int main()
{
    // n * (n-1) 했을 때 오버플로우가 날 수도 있으므로 롱롱으로
    long long n;
    scanf("%lld", &n);
    // n이 1일 경우
    if (n == 1)
    {
        printf("1\n");
        return 0;
    }
    // 지나가는 방의 수 구하기
    long long x, y = 0;
    // 방 개수 최대값 18258 까지 반복
    for (int i = 1; i < 18258; i++)
    {
        x = seq(i);
        y = seq(i + 1);
        if (n >= x && n < y)
        {
            printf("%d\n", i + 1);
            return 0;
        }
    }
}

long long seq(int i)
{
    long long x = 2 + 3 * (i - 1) * i;
    return x;
}