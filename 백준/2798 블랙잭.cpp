#include <iostream>
using namespace std;
int main() {
	int n, m;
	cin >> n >> m;
	int arr[30000];
	int c;
	int sum = 0;
	for (int i = 0; i < n; i++) {
		cin >>c;
		arr[i] = c;
	}
	for (int i = 0; i < n; i++) {
		for (int j = i + 1; j < n; j++) {
			for (int k = j + 1; k < n; k++) {
				
				if (arr[i] + arr[j] + arr[k] <= m && arr[i] + arr[j] + arr[k]>sum) {
					sum = arr[i] + arr[j] + arr[k];
				}
				
			}
		}
		
	}
	cout << sum;
	
	

}
