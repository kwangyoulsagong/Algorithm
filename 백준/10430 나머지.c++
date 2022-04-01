#include<iostream>
using namespace std;
int main() {
	int A, B, C,result1,result2,result3,result4;
	2 <= A, B, C <= 1000;
	cin >> A >> B >> C;
	result1 = (A + B) % C;
	result2 = ((A % C) + (B % C)) % C;
	result3 = (A * B) % C;
	result4 = ((A % C) * (B % C)) % C;
	cout << result1 << endl;
	cout << result2 << endl;
	cout << result3 << endl;
	cout << result4 << endl;



}
