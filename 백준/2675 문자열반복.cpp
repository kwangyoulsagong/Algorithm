#include <iostream>
#include <string>
using namespace std;
int main() {
	int t;
	cin >> t;
	for (int i = 0; i < t; i++) {
		int s;
		string a;
		
		cin >> s;
		cin >> a;
		for (int j= 0; j < a.length(); j++) {
			for (int k = 0; k< s; k++) {
				cout << a[j];
			}
		}
		cout << "\n";
		
		
	}
}

