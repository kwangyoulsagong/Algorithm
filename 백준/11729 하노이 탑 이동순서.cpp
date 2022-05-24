#include <iostream>
#include<cmath>
using namespace std;
void hanoi(int one, int two, int three,int n) {
	if (n == 1) cout << one << " " << three<<"\n";
	else {
		hanoi(one, three, two, n - 1);
		cout << one << " " << three<<"\n";
		hanoi(two, one, three, n - 1);
	}
	


}

int main() {
	int n;
	cin >> n;
	cout << (int)pow(2, n) - 1 << "\n";
	hanoi(1,2,3,n);
	
	
	
} 
