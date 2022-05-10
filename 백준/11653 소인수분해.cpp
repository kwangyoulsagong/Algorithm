#include <iostream>
using namespace std;
int main() {
	int n, div=2;
	cin >> n;
	for (; n != 1;) {
		if (n % div == 0) {
			cout << div<<"\n";
			n /= div;
		}
		else {
			div++;
		}
	}

}
#include <iostream>
using namespace std;
int main() {
	int n;
	cin >>n;

	for (int i = 2; i <= n; i++) {
		while (n % i == 0) {
			cout << i << "\n";
			n /= i;
		}
	
	}

}
