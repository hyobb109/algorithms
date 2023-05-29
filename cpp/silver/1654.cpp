// 랜선자르기
#include <iostream>
#include <algorithm>

int main()
{
	int k, n;
	std::cin >> k >> n;
	// 배열 동적할당
	int *lines = new int[k];
	for (int i = 0 ; i < k; i++) {
		std::cin >> lines[i];
	}
	long long s = 1;
	// max_element(start, end) -> 배열 최댓값 주소 반환
	long long e = *std::max_element(lines, lines + k);
	int res = 0;
	while (s <= e)
	{
		int cnt = 0;
		// s, e, m 을 long long 으로 해야 오버플로우 x
		long long m = (s + e) / 2;
		for (int i = 0; i < k; i++) {
			cnt += static_cast<long long>(lines[i]) / m;
		}
		if (cnt >= n) s = m + 1;
		else e = m - 1;
	}
	std::cout << e << '\n';
	// 동적할당한 메모리 해제
	delete[] lines;
	return 0;
}