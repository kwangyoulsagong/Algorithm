#include <iostream>
using namespace std;
int main() {
	int N;
	
	int count = 0;
	cin >> N;
	int init = N;

	for (;;) {
		N = (N%10)*10 + ((N / 10) + (N % 10))%10;
		count++;
		
		if (N == init) {
			break;
		}
		


		
		
		
		

	}
	cout << count << "\n";
	
	
	


	




	
	
	

	
}
