//최댓값
//??답은 맞았는데 테스트할 때 10번째 숫자까지 입력받음
#include <stdio.h>

int main()
{
    int n, res;
    int max = 0;
    for (int i = 1; i <= 9; i++)
    {
        scanf("%d\n", &n);
        if (n > max)
        {
            max = n;
            res = i;
        }
    }
    printf("%d\n%d", max, res);
}