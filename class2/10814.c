// 나이순 정렬
#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int age;
    char name[101];
}members;

members sorted[100001];

void merge(members *list, int s, int mid, int e)
{
    int i = s;
    int j = mid + 1;
    int k = s;
    while (i <= mid && j <= e)
    {
        if (list[i].age <= list[j].age)
            sorted[k++] = list[i++];
        else
            sorted[k++] = list[j++];
    }
    if (i > mid)
        while (j <= e)
            sorted[k++] = list[j++];
    else
        while (i <= mid)
            sorted[k++] = list[i++];
    for (int i = s; i <= e; i++)
        list[i] = sorted[i];
}

void mergesort(members *list, int s, int e)
{
    if (s < e)
    {
        int mid = (s + e) / 2;
        mergesort(list, s, mid);
        mergesort(list, mid + 1, e);
        merge(list, s, mid, e);
    }
}

int main()
{
    int n = 0;
    scanf("%d", &n);
    members *list = malloc(sizeof(members)*n);
    for (int i = 0; i < n; i++)
        scanf("%d %s", &list[i].age, &list[i].name);
    //printf("----RESULT----\n");
    mergesort(list, 0, n - 1);
    for (int i = 0; i < n; i++)
        printf("%d %s\n", list[i].age, list[i].name);
    free(list);
}