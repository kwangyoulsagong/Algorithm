#include <iostream>
using namespace std;
#include <string>
int main() {
	string w;
	cin >> w;
	int result=0;
	int a []={3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,10,10,10,10};
	for (int i = 0; i < w.length(); i++) {
		result += a[w[i]-65];
	}
	cout << result;


}
