// 좌표 정렬 2, y 오름차순 정렬인 것 빼고는 11650과 동일
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int x;
    int y;
}graph;

graph sorted[100000];

void merge(graph *arr, int s, int mid, int e)
{
    int i = s;
    int j = mid + 1;
    int k = s;
    while (i <= mid && j <= e)
    {
        if (arr[i].y < arr[j].y)
            sorted[k++] = arr[i++];
        else if (arr[i].y > arr[j].y)
            sorted[k++] = arr[j++];
        else
        {
            if (arr[i].x < arr[j].x)
                sorted[k++] = arr[i++];
            else
                sorted[k++] = arr[j++];
        }
    }
    if (i > mid)
        while (j <= e)
            sorted[k++] = arr[j++];
    else
        while (i <= mid)
            sorted[k++] = arr[i++];
    for (int i = s; i <= e; i++)
        arr[i] = sorted[i];
}

void mergesort(graph *arr, int s, int e)
{
    if (s < e)
    {
        int mid = (s + e) / 2;
        mergesort(arr, s, mid);
        mergesort(arr, mid + 1, e);
        merge(arr, s, mid, e);
    }
}

int main()
{
    int n = 0;
    scanf("%d", &n);
    // malloc 사이즈 잘 확인!
    graph *coord = malloc(sizeof(graph)*n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d %d", &coord[i].x, &coord[i].y);
    }
    mergesort(coord, 0, n -1);
    for (int i = 0; i < n; i++)
    {
        printf("%d %d\n", coord[i].x, coord[i].y);
    }
    free(coord);
}
