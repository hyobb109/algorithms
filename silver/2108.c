// 통계학
#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b);
int find_mode(int *arr, int n);

int main()
{
    int n = 0;
    int avg = 0;
    scanf("%d", &n);
    int *arr = malloc(sizeof(int) * n);
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }
    //printf("----answer----\n");
    // 산술평균
    double x = (double)sum / (double)n;
    if (x >= 0)
        avg = (int)(x + 0.5);
    else
        avg = (int)(x - 0.5);
    printf("%d\n", avg);

    // 중앙값 : 오름차순으로 나열했을 때 중앙값
    qsort(arr, n, sizeof(int), compare);
    int mid = n / 2;
    printf("%d\n", arr[mid]);

    // 최빈값, 여러개면 두번째로 작은 값 출력
    printf("%d\n", find_mode(arr, n));

    // 범위 : 최댓값과 최솟값 차이
    printf("%d\n", arr[n - 1] - arr[0]);

    free(arr);
    return 0;
}

// 비교함수는 int형 반환값과 const void 포인터 매개변수 2개 필요
int compare(const void *a, const void *b)
{
    // const void 포인터로는 값을 비교할 수 없으므로 
    // 정렬할 배열의 자료형 포인터로 변환하여 역참조로 값을 가져와야 함
    int num1 = *(int *)a;
    int num2 = *(int *)b;

    if (num1 < num2)
        return -1;
    if (num1 > num2)
        return 1;
    return 0;
}

int find_mode(int *arr, int n)
{
    int cnt[8001] = {0, };
    int idx = 0;
    int max = 0;
    int mode = 0;
    int tmp = 0;

    for (int i = 0; i < n; i++)
    {
        //cnt 배열 -4000 ~ 4000까지
        idx = arr[i] + 4000;
        cnt[idx]++;
        // 최빈값 max 찾기
        if (cnt[idx] > max)
        {
            max = cnt[idx];
        }
    }
    if (max == 1)
    {
        if (n == 1)
            return(arr[0]);
        return (arr[1]);
    }
    for (int i = 0; i < 8001; i++)
    {
        if (cnt[i] == max)
        {
            if (tmp == 1)
            {
                idx = i;
                break;
            }
            idx = i;
            tmp++;
        }
    }
    mode = idx - 4000;
    return (mode);
}