// 생일
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

class Person
{
private:
    std::string name_;
    int birthday_;

public:
    Person(std::string name, int bday) : name_(name), birthday_(bday) {};
    // void PrintData() {
    //     std::cout << name_ << birthday_ << '\n';
    // };
    std::string GetName() {
        return name_;
    }
    int GetBirthday() {
        return birthday_;
    }
};

// void PrintV(std::vector<Person>& v, int t) {
//     for (int i = 0; i < t; i++) {
//         v[i].PrintData();
//         // std::cout << v[i].GetName() << '\n';
//     };
//     std::cout << "===========\n";
// }

bool compare(Person a, Person b) {
    return a.GetBirthday() > b.GetBirthday();
}

int main()
{
    int t;
    std::vector <Person> v;

    std::cin >> t;
    for (int i = 0; i < t; i++)
    {
        std::string name;
        int day, month, year;
        std::cin >> name >> day >> month >> year;
        v.push_back(Person(name, year * 10000 + month * 100 + day));
    }
    // PrintV(v, t);
    sort(v.begin(), v.end(), compare);
    // PrintV(v, t);
    std::cout << v[0].GetName() << '\n' << v[t - 1].GetName() << '\n';
    return 0;
}