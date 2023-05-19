// 최대공약수와 최소공배수
#include <iostream>

int	gcd(int a, int b)
{
	if (a % b == 0)
		return (b);
	return gcd(b, a % b);
}

int main()
{
	int a, b, gcd_num;
	std::cin >> a >> b;
	if (a > b)
		gcd_num = gcd(a, b);
	else
		gcd_num = gcd(b, a);
	std::cout << gcd_num << '\n';
	std::cout << (a * b) / gcd_num << '\n';
	return (0);
}