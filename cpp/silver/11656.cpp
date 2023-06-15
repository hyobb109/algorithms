// 접미사 배열
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

bool compare(std::string s1, std::string s2) {
	return s1 < s2;
}

int main() {
	std::string s;
	std::cin >> s;
	std::vector<std::string> v;
	for (int i = 0; i < s.length(); i++)
		v.push_back(s.substr(i));
	sort(v.begin(), v.end(), compare);
	for (auto loop : v)
		std::cout << loop << '\n';
	return 0;
}