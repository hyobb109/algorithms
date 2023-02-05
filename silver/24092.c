// 알고리즘 수업 - 퀵 정렬 3
#include <stdio.h>
#include <stdlib.h>

int n;
int idx;
int a[10005];
int b[10005];

int compare(int *arr)
{
	for (int i = 0; i < n; i++)
	{
		if (arr[i] != b[i])
			return i;
	}
	printf("1");
	exit(0);
}

void swap(int *arr, int x, int y)
{
	int tmp = arr[x];
	arr[x] = arr[y];
	arr[y] = tmp;
	if (x == idx || y == idx)
		idx = compare(arr);
}

int partition(int *arr, int l, int r)
{
	int pivot = arr[r];
	int s = l - 1;
	for (int j = l; j < r; j++)
	{
		if (arr[j] <= pivot)
			swap(arr, ++s, j);
	}
	if (++s != r)
		swap(arr, s, r);
	return s;
}

void quick_sort(int *arr, int l, int r)
{
	if (l < r)
	{
		int p = partition(arr, l, r);
		quick_sort(arr, l, p - 1);
		quick_sort(arr, p + 1, r);
	}
}

int main()
{
	scanf("%d", &n);
	for (int i = 0; i < n; i++)
		scanf("%d", &a[i]);
	for (int i = 0; i < n; i++)
		scanf("%d", &b[i]);
	idx = compare(a);
	quick_sort(a, 0, n - 1);
	printf("0");
	return 0;
}