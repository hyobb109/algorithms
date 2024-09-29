#include <stdio.h>

int main()
{
    int a, b;
    while (a != 0 || b != 0) // or   while (1)도 가능, while은 조건이 참일 경우 반복하기 때문에 &&가 아닌 || 사용
    {
        scanf("%d %d", &a, &b);
        if (a == 0 && b == 0)
            break;
        printf("%d\n", a + b);
    }
}