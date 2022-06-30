#include <stdio.h>

int main()
{
    int n;
    scanf("%d\n", &n);
    int arr[n];
    int i = -1;
    while (++i < n)
        scanf("%1d", &arr[i]);
    int j = -1;
    int res = 0;
    while (++j < n)
        res += arr[j];
    printf("%d", res);
}