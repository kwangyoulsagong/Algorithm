#include <iostream>
using namespace std;


int main() {
	int t;
	cin >> t;
	int H, W, N;
	
	
	for (int i = 0; i < t; i++) {
		int f, r;
		
		cin >> H >> W >> N;
		f = N % H;
		r = N / H;
		if (f > 0) {
			r++;
		}
		else
			f = H;
		cout << f * 100 + r << "\n";


	}




}
