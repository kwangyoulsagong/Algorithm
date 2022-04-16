#include <iostream>
using namespace std;
int main() {
	int x;
	cin >> x;
	int bun;
	int mo;
	int i = 1;
	for ( i; i < x; i++) {
		x -= i;
		
			
	}
	if (i % 2 == 1) {
		bun = i + 1-x;
		mo = x;
	}

	else {
		bun = x; mo = i + 1-x;
	}

	cout << bun << "/" << mo << "\n";
	
}

