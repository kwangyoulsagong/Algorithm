#include <iostream>
using namespace std;
#include <string>

int main() {
	int n;
	string s;
	cin >> n;
	
	int count = 0;
	for (int i = 0; i < n; i++) {
		bool flag = true;
		cin >> s;;
		for (int j = 0; j < s.length(); j++) {
			for (int k = 0; k < j; k++) {
				if (s[j] != s[j - 1] && s[j] == s[k]) {
					flag = false;
					break;
				}
			}
		}
		if(flag)
			count++;
	}
	cout << count;



}

