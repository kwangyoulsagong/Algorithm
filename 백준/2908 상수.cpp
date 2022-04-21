#include <iostream>
using namespace std;
int main() {
	int a, b, A, B;
	
	cin >> a>>b;
	A = (a % 10)*100+ (a % 100 / 10)*10+ (a / 100);
	B= (b % 10) * 100 + (b % 100 / 10) * 10 + (b / 100);
	if (A > B) {
		cout << A;
	}
	else
		cout << B;


}

