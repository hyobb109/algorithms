//알파벳 찾기
#include <stdio.h>

int main()
{
    char s1[101];
    char abc[27] = "abcdefghijklmnopqrstuvwxyz";
    scanf("%s", s1);
    for (int i = 0; abc[i]; i++)
    {
        int res;
        for (int j = 0; s1[j]; j++)
        {
            if (s1[j] == abc[i])
            {
                res = j;
                break;
            }
            else
                res = -1;
        }
        printf("%d ", res);
    }
}