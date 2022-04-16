#include <iostream>
using namespace std;
int main() {
	int a, b, c;
	cin >> a >> b >> c;
	int result = (a / (c - b))+1;
	if (b>=c ) {
		result = -1;
	}
	cout << result;
}

