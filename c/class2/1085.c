// 직사각형에서 탈출
#include <stdio.h>

int main()
{
    int x, y, w, h;
    scanf("%d %d %d %d", &x, &y, &w, &h);
    // 각 변으로부터 거리 정수형 배열에 저장
    int distance[4] = {x, y, w - x, h - y};
    // 최솟값 찾기
    int min = 1000;
    for (int i = 0; i < 4; i++)
    {
        if (distance[i] < min)
        {
            min = distance[i];
        }
    }
    printf("%d\n", min);
}