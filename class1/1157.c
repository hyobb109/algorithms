// 단어 공부
#include <stdio.h>
#include <string.h>

void capitalize(char *s)
{
    for (int i = 0; s[i] != 0; i++)
    {
        if (s[i] >= 'a' && s[i] <= 'z')
        {
            s[i] -= 32;
        }
    }
}

int main()
{
    char s[1000001];
    scanf("%s", s);
    // 모두 대문자로 변환
    capitalize(s);
    int n = strlen(s);
    // 알파벳 수만큼 정수형 배열 선언하고 모두 0으로 초기화
    int tmp[26] = {
        0,
    };
    // 문자 카운트해서 해당 알파벳 위치에 개수 저장
    for (int i = 0; i < n; i++)
    {
        tmp[s[i] - 65]++;
    }
    //최댓값과 문자 인덱스 찾기
    int max = 0;
    int index = 0;
    for (int i = 0; i < 26; i++)
    {
        if (tmp[i] > max)
        {
            max = tmp[i];
            index = i;
        }
    }
    for (int i = 0; i < 26; i++)
    {
        for (int j = 1; j < 26; j++)
        {
            if (i == 25)
            {
                break;
            }
            if (tmp[i] == max && tmp[i] == tmp[i + j])
            {
                printf("?\n");
                return 0;
            }
        }
    }
    char res[30] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?";
    printf("%c\n", res[index]);
    return 0;
}