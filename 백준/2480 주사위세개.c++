#include <iostream>
using namespace std;
int main() {
	int a, b, c;
	int result;
	cin >> a >> b >> c;
	if (a == b&&b== c) {
		result = 10000 + (a) * 1000;
	}
	else if (a == b && b != c && a != c) {
		result = 1000 + (a) * 100;

	}
	else if (a != b && b == c && a != c) {
		result = 1000 + (b) * 100;

	}
	else if (a != b && b != c && a == c) {
		result = 1000 + (c) * 100;

	}
	else if (a >= b) {
		result = a * 100;
	}
	else if (c >=b) {
		result = c * 100;
	}
	else  {
		result = b * 100;
	}
	
	cout << result << endl;

}
