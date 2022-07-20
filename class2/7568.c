// 덩치
#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int x;
    int y;
}physical;

int main()
{
    int n = 0;
    scanf("%d", &n);
    physical *list = malloc(sizeof(int) * n);
    // int *count 로 하니까 런타임에러(StoreToNullPointer) 발생해서 배열로 바꿔줌
    // 이유는..??
    int count[50];
    for (int i = 0; i < n; i++)
    {
        scanf("%d %d", &list[i].x, &list[i].y);
        count[i] = 1;
    }
    // 덩치 큰 사람 있으면 카운트
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (i == j)
                continue;
            if (list[i].x < list[j].x && list[i].y < list[j].y)
                count[i]++;
        }
    }
    for (int i = 0; i < n; i++)
        printf("%d ", count[i]);
    printf("\n");
    free(list);
}