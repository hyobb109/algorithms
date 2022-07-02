//음계
#include <stdio.h>

int main()
{
    int res;
    int a = 1, b = 8;
    int arr[8];
    for (int i = 0; i < 8; i++)
    {
        scanf("%d", &arr[i]);
        if (arr[i] == a)
            a++;
        else if (arr[i] == b)
            b--;
    }
    if (a == 9)
        printf("ascending");
    else if (b == 1)
        printf("descending");
    else
        printf("mixed");
}