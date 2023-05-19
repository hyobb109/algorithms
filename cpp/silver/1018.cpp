// 체스판 다시 칠하기
#include <iostream>
#include <string>

std::string board[51];

std::string white[8] = {
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW"
};

std::string black[8] = {
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
};

int check(int i, int j)
{
	int w = 0;
	int b = 0;
	int n = 0;
	for (int x = i; x < i + 8; x++)
	{
		int m = 0;
		for (int y = j; y < j + 8; y++)
		{
			if (board[x][y] != white[n][m])
				w++;
			else if (board[x][y] != black[n][m])
				b++;
			m++;
		}
		n++;
	}
	if (w < b)
		return w;
	return b;
}

int main()
{
	int n, m, cnt;
	int min = 99999;

	std::cin >> n >> m;
	for (int i = 0; i < n; i++)
		std::cin >> board[i];
	for (int i = 0; i <= n - 8; i++)
	{
		for (int j = 0; j <= m - 8; j++)
		{
			cnt = check(i, j);
			if (min > cnt)
				min = cnt;
		}
	}
	std::cout << min << '\n';
}