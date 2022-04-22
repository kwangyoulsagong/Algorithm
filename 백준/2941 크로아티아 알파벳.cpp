#include <iostream>
using namespace std;
#include <string>
#include <vector>
int main() {
	string s;
	cin >> s;
	int count = 0;
	vector<string> a = {"c=","c-","dz=","d-","lj","nj","s=","z="};
	for (int i = 0; i < a.size(); i++) {
		for (;;) {
			if ((int)s.find(a[i]) == string::npos) {
				break;

			}
			s.replace((int)s.find(a[i]), a[i].length(), "#");

		}
	
		

		
	}
	cout << s.length();


}
