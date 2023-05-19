// 큐 2
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
	int n = 0;
	int *q = (int *)calloc(2000005, sizeof(int));
	int head = 0;
	int tail = 0;
	scanf("%d", &n);
	for (int i = 0; i < n; i++)
	{
		char cmd[10];
		scanf("%s", cmd);
		if (strcmp(cmd, "push") == 0)
		{
			int x = 0;
			scanf("%d", &x);
			q[tail++] = x;
		}
		else if (strcmp(cmd, "pop") == 0)
		{
			if (tail == head)
				printf("-1\n");
			else
				printf("%d\n", q[head++]);
		}
		else if (strcmp(cmd, "size") == 0)
			printf("%d\n", tail - head);
		else if (strcmp(cmd, "empty") == 0)
		{
			if (tail == head)
				printf("1\n");
			else
				printf("0\n");
		}
		else if (strcmp(cmd, "front") == 0)
		{
			if (tail == head)
				printf("-1\n");
			else
				printf("%d\n", q[head]);
		}
		else if (strcmp(cmd, "back") == 0)
		{
			if (tail == head)
				printf("-1\n");
			else
				printf("%d\n", q[tail - 1]);
		}
	}
	free(q);
	return 0;
}