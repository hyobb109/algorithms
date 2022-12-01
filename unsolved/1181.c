// 단어 정렬
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int compare(const void *x, const void *y) // x와 y는 strs의 원소를 가리키는 포인터
{
	// strs가 char **이므로 맞춰서 형변환하고 값 역참조
	char *s1 = *(char **)x;
    char *s2 = *(char **)y;
	int len1 = strlen(s1);
	int len2 = strlen(s2);
    if (len1 != len2) // s1이 s2보다 길면 양수 반환, 짧으면 음수 반환
		return (len1 - len2);
    return (strcmp(s1, s2)); // 길이가 같으면 알파벳 순으로 정렬
}

int main()
{
    int n = 0;
    scanf("%d", &n);
    char **strs = (char **)malloc(sizeof(char *)*(n + 1));
    for (int i = 0; i < n; i++)
    {
        strs[i] = (char *)malloc(sizeof(char) * 51);
        scanf("%s", strs[i]);
    }
    strs[n] = 0;
    // printf("=====result=====\n");
    qsort(strs, n, sizeof(strs[0]), compare);
    for (int i = 0; i < n - 1; i++)
    {
		if (strcmp(strs[i], strs[i + 1]))
			printf("%s\n", strs[i]);
        free(strs[i]);
    }
	printf("%s\n", strs[n - 1]);
	free(strs[n - 1]);
    free(strs);
    return 0;
}
