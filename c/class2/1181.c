// 단어 정렬
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct
{
    char *word[51];
    int wlen;
}list;

list copy[]
void merge(list )
int main()
{
    int n = 0;

    scanf("%d", &n);
    char words[n][51];
    for (int i = 0; i < n; i++)
    {
        scanf("%s", words[i]);
    }
    printf("----answer----\n");
    qsort(words, n, sizeof(words), compare);
    for (int i = 0; i < n - 1; i++)
    {

    }
    //for (int i = 0; i < n; i ++)
        //printf("%s\n", words[i]);
}