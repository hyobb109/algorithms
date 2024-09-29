//상수, 숫자 뒤집어서 비교하는 문제

#include <stdio.h>

int reverse(int a)
{

    int res = (a % 10) * 100 + ((a % 100) / 10) * 10 + (a / 100);
    return (res);
}

int main()
{
    int a, b, res;
    scanf("%d %d", &a, &b);
    int a_rev = reverse(a);
    int b_rev = reverse(b);
    if (a_rev > b_rev)
        printf("%d", a_rev);
    else
        printf("%d", b_rev);
}