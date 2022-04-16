#include <iostream>
using namespace std;
int d(int x) {
	int count = 0;
	if (x <100) {
		return x;
	}
	else 
		for (int i = 100; i <=x; i++) {
			if ((i/100)-((i%100)/10)==((i%100)/10)-(i%10)) {
				count++;
			}
		}
	return 99 + count;
}
int main() {
	int n;
	cin >> n;
	cout << d(n);

}
