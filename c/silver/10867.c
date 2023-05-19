// 중복 빼고 정렬하기
#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b)
{
	int tmp = *a;
	*a = *b;
	*b = tmp;
}

int pivot(int *arr, int s, int e)
{
	int p = arr[e];
	int idx = s;
	for (int i = s; i < e; i++)
	{
		if (p > arr[i])
			swap(&arr[idx++], &arr[i]);
	}
	swap(&arr[e], &arr[idx]);
	return idx;
}

int *q_sort(int *arr, int l, int r)
{
	if (l < r)
	{
		int p = pivot(arr, l, r);
		q_sort(arr, l, p - 1);
		q_sort(arr, p + 1, r);
	}
	return arr;
}

int main()
{
	int n = 0;
	scanf("%d", &n);
	int *arr = malloc(sizeof(int) * n);
	int *res = malloc(sizeof(int) * n);
	for (int i = 0; i < n; i++)
		scanf("%d", &arr[i]);
	arr = q_sort(arr, 0, n - 1);
	int j = 0;
	for (int i = 0; i < n; i++)
	{
		if (i != 0 && arr[i] == arr[i -1])
			continue;
		res[j++] = arr[i];
	}
	for (int i = 0; i < j; i++)
	{
		printf("%d", res[i]);
		if (i == j - 1)
			break;
		printf(" ");
	}
	free(arr);
	free(res);
	return 0;
}