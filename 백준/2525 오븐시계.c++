#include <iostream>
using namespace std;
int main() {
	int H, M, C;
	cin >> H >> M;
	cin >> C;
	H += C /60;
	M += C % 60;
	if (M > 59) {
		H++;
		M %= 60;
	}
	if(H>=24) {
		H %= 24;

	}
	cout << H <<" " << M << endl;

	
}
