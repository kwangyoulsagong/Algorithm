#include <iostream>
using namespace std;
int part(int n) {
	int sum = n;
	for (; n;) {
		sum += n % 10;
		n /= 10;
	}
	return sum;
}
int main() {
	int n;
	cin >> n;
	for (int i = 1; i < n; i++) {
		int sum = part(i);
		if (sum == n) {
			cout << i;
			return 0;
		}
		
	}
	cout << 0 << endl;;

	
}
