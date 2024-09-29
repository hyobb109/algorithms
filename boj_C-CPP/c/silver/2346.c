// 풍선 터뜨리기 -> 원형 연결리스트 사용
#include <stdio.h>
#include <stdlib.h>

typedef struct node
{
	int num;
	int move;
	int flag;
	struct node *pre;
	struct node *next;
} node;

node *create_node(int idx, int pos)
{
	node *new = malloc(sizeof(node));
	new->num = idx + 1;
	new->move = pos;
	new->flag = 0;
	new->pre = NULL;
	new->next = NULL;
	return (new);
}

int main()
{
	int n = 0;
	node *balloon;
	node *head;
	node *tmp;
	node *tail;

	scanf("%d", &n);
	int arr[n];
	for (int i = 0; i < n; i++)
		scanf("%d", &arr[i]);

	// 연결리스트 생성
	for (int i = 0; i < n; i++)
	{
		balloon = create_node(i, arr[i]);
		if (i > 0)
		{
			tmp->next = balloon;
			balloon->pre = tmp;
		}
		else
			head = balloon;
		tmp = balloon;
	}
	tail = balloon;
	tail->next = head;
	head->pre = tail;

	int i = 0;
	int pos = 0;
	balloon = head;
	while (i < n)
	{
		printf("%d", balloon->num);
		if (++i == n) break;
		printf(" ");
		pos = balloon->move;
		balloon->flag = 1;
		if (pos > 0)
		{
			while (pos)
			{
				if (!(balloon->next->flag))
					pos--;
				balloon = balloon->next;
			}
		}
		else if (pos < 0)
		{
			while (pos)
			{
				if (!(balloon->pre->flag))
					pos++;
				balloon = balloon->pre;
			}
		}
	}
	// 노드 free
	for (int i = 0; i < n; i++)
	{
		tmp = head;
		head = head->next;
		free(tmp);
	}
	return 0;
}