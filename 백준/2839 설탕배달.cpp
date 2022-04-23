#include <iostream>
using namespace std;
int n;
int main() {
	cin >> n;
	int count = 0;
	for (; n >= 0;) {
		if (n % 5 == 0) {
			count += (n / 5);
			cout << count << "\n";
			return 0;
		}
		n -= 3;
		count++;

	}
	cout << -1 << "\n";
	

	
}
