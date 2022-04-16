#include <iostream>
using namespace std;
int main() {
	int n;
	cin >> n;
	int d = 2;
	int i = 0;
	for ( d; d <= n; i++) {
		d += 6 * i;
		
	}
	if (n == 1) {
		i = 1;
	}
	cout << i;
	
}

