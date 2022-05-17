#include <iostream>
using namespace std;
#define MAX 10000
int arr[MAX + 1]{ 0, };
int main() {
	


	

	for (int j = 2; j <= MAX; j++) {
		arr[j] = j;
	}
	for (int j = 2; j <= MAX; j++) {
		if (arr[j] == 0) continue;
		for (int k = 2 * j; k <= MAX; k += j) {
			arr[k] = 0;
		}
	}
	int T;
	cin >> T;
	for (int i = 0; i < T; i++) {
		int n; 
		cin >> n;
		for (int j = n/2; j >=2; j--) {// 이게중요
			if (arr[j] && arr[n - j]) {
				cout << j << " " << n - j << "\n";
				break;
			}
		}

	}

}
