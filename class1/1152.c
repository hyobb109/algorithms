//단어의 개수
#include <stdio.h>
#include <string.h>

int main()
{
    char s[1000001];
    int count = 1;
    scanf("%[^\n]s", s);
    int n = strlen(s);
    if ((n == 1 && s[0] == ' ') || n == 0)
    {
        printf("%d", 0);
        return (0);
    }
    if (s[0] == ' ')
    {
        s[0] = 'a';
    }
    // 0부터 세니까 마지막 문자는 n-1번째!!!! 헷갈리지 않기
    if (s[n - 1] == ' ')
    {
        s[n - 1] = 'a';
    }
    for (int i = 0; s[i] != 0; i++)
    {
        if (s[i] == ' ')
        {
            count++;
        }
    }
    printf("%d\n", count);
}