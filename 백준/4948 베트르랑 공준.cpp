
#include <iostream>
const int MAX = 123456 * 2 + 1;
int arr[MAX];
using namespace std;
void erathosthenes(void) {
	for (int i = 2; i <= MAX; i++) {
		arr[i] = i;
	}

	// 지우기  
	//2부터 시작해서 특정수의 배수에 해당하는 수를 모두지움 지울떄 자기자신은 안지우고 건너뜀
	for (int i = 2; i <= MAX; i++) {
		// 이미 지워진 경우  
		if (arr[i] == 0) {// 소수가 아니면  지움
			continue;
		}
		// 지워지지 않은 경우 자기자신을 제외한 수부터 배수 지우기  
		for (int j = 2 * i; j <= MAX; j += i) {// 지워진 숫자가 아니면 그배수부터 출발하여 가능한 모든숫자 지우기
			arr[j] = 0;
		}
	}

	// 소수 출력하기 

}

int main() {
	erathosthenes();
	for (;;) {
		int n;
		cin >> n;
		int count = 0;
		if (n == 0) {
			break;
		}
		for (int i = n+1; i <= 2*n; i++) {
			if (arr[i] != 0){
				count++;
			}
		}
		cout << count<<"\n";
	}

}


