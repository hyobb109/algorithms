//숫자의 개수
#include <stdio.h>

int main()
{
    int a, b, c, abc;

    scanf("%d\n%d\n%d", &a, &b, &c);
    abc = a * b * c;
    int temp = abc;
    for (int find = 0; find < 10; find++)
    {
        temp = abc;
        int count = 0;
        for (int digit = 0; temp != 0; digit++)
        {
            if (temp % 10 == find)
            {
                count++;
            }
            temp = temp / 10; //이걸 if 안에다가 써 놓고 한시간 넘게 왜 안되지 하고 있었음....
        }
        printf("%d\n", count);
    }
}