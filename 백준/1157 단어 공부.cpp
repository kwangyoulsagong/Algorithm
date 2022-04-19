#include <iostream>
#include <string>
using namespace std;
int main() {
	string s;
	cin >> s;
	int a[26]={0,};
	int max = 0;
	int idx = 0;
	int count = 0;
	for (int i = 0; i < s.length(); i++) {
		if (s[i] < 97) {
			a[s[i] - 65]++;
		}
		else
			a[s[i] - 97]++;
	}
	
	for (int i = 0; i < 26; i++) {
		if (max < a[i]) {
			max = a[i];
			idx = i;
			

		}
	}
	for (int i = 0; i < 26; i++) {
		if (max == a[i]) {
			count++;
		}
	
		
	}
	if (count > 1) {
		cout << "?";
	}
	else 
		cout << (char)(idx + 65);



	
}

