#include <iostream>
using namespace std;
int main() {
	int n; 
	cin >> n;
	int count;
	int arr[50][50];
	for (int i = 0; i < n; i++) {
		cin >> arr[i][0] >> arr[i][1];
	}
	for (int i = 0; i < n; i++) {
		count = 1;
		for (int j = 0; j < n; j++) {
			if (arr[i][0] < arr[j][0] &&  arr[i][1] < arr[j][1]) {
				count++;
			}
			arr[i][2] = count;
		}
	}
	for (int i = 0; i < n; i++) {
		cout << arr[i][2]<<" ";
	}
}
