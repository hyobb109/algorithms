// 직각삼각형
#include <stdio.h>

void pythagorean(int side[3]);
int main()
{
    int side[3] = {
        0,
    };
    int sum;
    while (1)
    {
        sum = 0;
        // 정수형 배열에 삼각형 변 저장
        for (int i = 0; i < 3; i++)
        {
            scanf("%d", &side[i]);
            sum += side[i];
        }
        // 0 0 0 이 입력되면 종료
        if (sum == 0)
        {
            break;
        }
        // 피타고라스 정리 계산
        pythagorean(side);
    }
    return 0;
}

void pythagorean(int side[3])
{
    // int max, sum, max_sqr = 0; -> 맨 뒤 변수만 초기화가 되어서 계속 오류가 났음..
    int max = 0;
    int sum = 0;
    int max_sqr = 0;
    for (int i = 0; i < 3; i++)
    {
        if (side[i] > max)
        {
            max = side[i];
            max_sqr = max * max;
        }
    }
    for (int i = 0; i < 3; i++)
    {
        if (side[i] != max)
        {
            sum += side[i] * side[i];
        }
    }
    if (sum == max_sqr)
    {
        printf("right\n");
    }
    else
    {
        printf("wrong\n");
    }
}