#include <iostream>
using namespace std;

int main() {
	int n;
	cin >> n;
	int arr[1000];
	int count = 0;
	int result = 0;
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
		for (int j = 1; j <=(int)arr[i]; j++) {
			if ((int)arr[i] % j == 0) {
				count++;
			}
		}
		if (count == 2) {
			result++;
		}
		count = 0;
		
	}
	cout << result;
	
	
}
