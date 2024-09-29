// 좌표 정렬하기, merge sort 사용
#include <stdio.h>
#include <stdlib.h>
// x, y 함께 간편하게 정렬하기 위해 구조체 선언
typedef struct {
    int x;
    int y;
} graph;

// 정렬 배열은 불필요한 메모리 사용 최소화 하기 위해 전역변수로 선언
graph sort[100000];

void merge(graph *arr, int start, int mid, int end);
void mergesort(graph *arr, int start, int end);

int main()
{
    int n = 0;
    scanf("%d", &n);
    graph *arr = malloc(sizeof(graph) * n);
    for (int i = 0; i < n; i++)
        scanf("%d %d", &arr[i].x, &arr[i].y);
    mergesort(arr, 0, n - 1);
    for (int i = 0; i < n; i++)
        printf("%d %d\n", arr[i].x, arr[i].y);
    free(arr);
}

void merge(graph *arr, int start, int mid, int end)
{
    // i는 왼쪽 절반 인덱스
    int i = start;
    // j는 오른쪽 절반 인덱스
    int j = mid + 1;
    // k는 정렬된 배열의 인덱스
    int k = start;
    // 오름차순으로 각 배열에 삽입
    while (i <= mid && j <= end)
    {
        // 왼쪽이 작으면 왼쪽 값 넣어줌
        if (arr[i].x < arr[j].x)
            sort[k++] = arr[i++];
        //오른쪽이 작으면 오른쪽 값 넣어줌
        else if (arr[i].x > arr[j].x)
            sort[k++] = arr[j++];
        // 왼쪽, 오른쪽 x값이 같으면 arr.y를 비교
        else
        {
            if (arr[i].y < arr[j].y)
                sort[k++] = arr[i++];
            else if (arr[i].y > arr[j].y)
                sort[k++] = arr[j++];
        }
    }
    // 왼쪽 정렬이 먼저 끝나면 오른쪽 값 순서대로 넣어줌
    if (i > mid)
        while (j <= end)
            sort[k++] = arr[j++];
    // 오른쪽 정렬이 먼저 끝나면 왼쪽 값 순서대로 넣어줌
    else
        while (i <= mid)
            sort[k++] = arr[i++];
    // 정렬된 배열을 원래 배열로 그대로 옮김
    for (int i = start; i <= end; i++)
        arr[i] = sort[i];
}

void mergesort(graph *arr, int start, int end)
{
    if (start < end)
    {
        // 반으로 나누는 지점 정해줌
        int mid = (start + end) / 2;
        // 왼쪽 나눔
        mergesort(arr, start, mid);
        // 오른쪽 나눔
        mergesort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}