// 수 정렬하기 3
// 처음에 동적할당 해서 버블 정렬 사용했더니 메모리 초과가 나서 카운팅 정렬 사용
#include <stdio.h>

int main()
{
    int n = 0;
    int nb = 0;
    scanf("%d", &n);
    // 입력 받는 자연수 범위가 10000까지, 따라서 그보다 크거나 같은 정수형 배열 필요
    // 10000을 1000으로 잘못 써서 계속 런타임에러(Out of Bounds) 발생..
    int count[10001] = {0, };
    // n만큼 숫자 입력 받고, 해당하는 인덱스 카운트
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &nb);
        count[nb]++;
    }
    for (int i = 0; i < 10001; i++)
    {
        // 해당 인덱스 값만큼 반복해서 출력
        for (int j = 0; j < count[i]; j++)
            printf("%d\n", i);
    }
    return 0;
}