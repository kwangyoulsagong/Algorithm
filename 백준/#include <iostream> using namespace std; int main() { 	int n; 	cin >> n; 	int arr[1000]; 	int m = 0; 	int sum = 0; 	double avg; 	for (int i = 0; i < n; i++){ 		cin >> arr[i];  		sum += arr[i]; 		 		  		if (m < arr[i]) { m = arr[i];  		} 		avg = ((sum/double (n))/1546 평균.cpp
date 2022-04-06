#include <iostream>
using namespace std;
int main() {
	int n;
	cin >> n;
	int arr[1000];
	int m = 0;
	int sum = 0;
	double avg;
	for (int i = 0; i < n; i++){
		cin >> arr[i];

		sum += arr[i];
		
		

		if (m < arr[i]) { m = arr[i]; 
		}
		avg = ((sum / double (n))/m)*100;
		cout << fixed;
		cout.precision(6);
	}

	cout << avg<<"\n";
	
	

	
	

}
