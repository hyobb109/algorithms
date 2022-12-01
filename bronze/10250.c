// ACM 호텔
#include <stdio.h>
int assign(int h, int w, int n);

int main()
{
    int t = 0;
    scanf("%d", &t);
    int h = 0;
    int w = 0;
    int n = 0;
    int room = 0;
    for (int i = 0; i < t; i++)
    {
        scanf("%d %d %d", &h, &w, &n);
        room = assign(h, w, n);
        printf("%d\n", room);
    }
}

int assign(int h, int w, int n)
{
    // yyxx호 계산
    int x = n / h + 1;
    int y = (n % h) * 100;
    // y = 0일 때 예외처리 (h층 일 경우)
    if (y == 0)
    {
        return (h * 100 + n / h);
    }
    return (x + y);
}