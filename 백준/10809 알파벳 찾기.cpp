#include <iostream>
using namespace std;
#include <string>
int main() {
	string s;
	cin >> s;
	int  a[26];
	
	for (int i = 0; i < 26; i++) {
		a[i]= - 1;
	

	}
	for (int i = 0; i < s.length(); i++) {
		if (a[(int)s[i] - 97] < 0) {
			a[(int)s[i] - 97] = i;
		}
	}
	for (int i = 0; i < 26; i++) {
		cout << a[i] << " ";
	}
}
