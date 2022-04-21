#include <iostream>
using namespace std;
int main() {
	int a, b, A, B;
	
	cin >> a>>b;
	A = (a % 10)*100+ (a % 100 / 10)*10+ (a / 100);
	B= (b % 10) * 100 + (b % 100 / 10) * 10 + (b / 100);
	if (A > B) {
		cout << A;
	}
	else
		cout << B;


}
#include <iostream>
using namespace std;
int main() {
	string a, b;
	cin >> a >> b;
	string bigger;
	for (int i = 2; i >= 0; i--) {
		if (a[i] > b[i]) {
			bigger = a;
			break;
		}
		else if(a[i] < b[i]) {
			bigger = b;
			break;
		}
	}
	cout << bigger[2]<<bigger[1]<<bigger[0];

}


