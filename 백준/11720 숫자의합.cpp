#include <iostream>
using namespace std;

int main() {
	int n;
	cin >> n;
	char arr[100];
	int sum = 0;
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
		sum += arr[i] - 48;
		

	}
	cout << sum;
	
	


}
