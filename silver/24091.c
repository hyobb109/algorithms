// 알고리즘 수업 - 퀵 정렬 2
#include <stdio.h>
#include <stdlib.h>

int cnt;
int n;
int k;

void print_arr(int *arr)
{
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);
	exit(0);
}

void swap(int *arr, int *a, int *b)
{
	int tmp = *a;
	*a = *b;
	*b = tmp;
	if (++cnt == k)
		print_arr(arr);
}

int partition(int *arr, int l, int r)
{
	int pivot = arr[r];
	int s = l - 1;
	for (int j = l; j < r; j++)
	{
		if (arr[j] <= pivot)
			swap(arr, &arr[++s], &arr[j]);
	}
	if (++s != r)
		swap(arr, &arr[s], &arr[r]);
	return s;
}

void quick_sort(int *arr, int l, int r)
{
	if (l < r)
	{
		int p = partition(arr, l, r);
		quick_sort(arr, l, p-1);
		quick_sort(arr, p+1, r);
	}
}

int main()
{
	scanf("%d %d", &n, &k);
	int *arr = malloc(sizeof(int) * n);
	for (int i = 0; i < n; i++)
		scanf("%d", &arr[i]);
	quick_sort(arr, 0, n-1);
	if (k > cnt)
		printf("-1");
	free(arr);
	return 0;
}