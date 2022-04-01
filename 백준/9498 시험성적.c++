#include<iostream>
using namespace std;
int main() {
	int result;
	cin >> result;
	if (0 <= result <= 100) {
		if (90 <= result) {
			cout << "A" << endl;
		}
		else if (80 <= result) {
			cout << "B" << endl;
		}
		else if (70 <= result) {
			cout << "C" << endl;
		}
		else if (60 <= result) {
			cout << "D" << endl;
		}
		else {
			cout << "F" << endl;
		}
	}


}
