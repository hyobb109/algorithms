// OX 퀴즈
#include <stdio.h>
#include <string.h>

int main()
{
    int n;
    int score = 0;
    char res[81];
    scanf("%d", &n);
    for (int i = 0; i < n; i++)
    {
        int point = 0;
        scanf("%s", res);
        for (int j = 0; j < strlen(res); j++)
        {
            if (res[j] == 'X')
            {
                point = 0;
            }
            else
            {
                point++;
            }
            score += point;
        }
        printf("%d\n", score); //개행을 안 넣으면 틀림!
        score = 0;
    }
}