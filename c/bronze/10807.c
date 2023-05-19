//개수 세기

#include <stdio.h>

int main()
{
    int n, v;
    scanf("%d", &n);
    int arr[n];
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    scanf("%d", &v);
    int count = 0;
    for (int j = 0; j < n; j++)
        if (arr[j] == v)
            count++;
    printf("%d", count);
}