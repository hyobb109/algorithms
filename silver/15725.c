// 다항함수의 미분
#include <unistd.h>
#include <stdio.h>
#include <string.h>

int main()
{
	char fx[20];
	scanf("%s", fx);
	int idx = strlen(fx) - 1;
	while (fx[idx] != 'x' && idx > 0)
		idx--;
	if (idx == 0 && fx[idx] != 'x')
		write(1, "0", 1);
	else if (fx[0] == 'x')
		write(1, "1", 1);
	else if (idx == 1 && fx[0] == '-')
		write(1, "-1", 2);
	else
		write(1, fx, idx);
	return 0;
}