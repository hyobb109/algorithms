//문자열 반복
#include <stdio.h>
#include <string.h>

int main()
{
    int t, r, len;
    scanf("%d", &t);
    char s[t][21];
    for (int i = 0; i < t; i++)
    {
        scanf("%d %s", &r, &s[i]);
        len = strlen(s[i]);
        for (int j = 0; j < len; j++)
        {
            for (int k = 0; k < r; k++)
                printf("%c", s[i][j]);
        }
        printf("\n");
    }
}