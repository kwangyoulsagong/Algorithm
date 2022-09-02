#include <iostream>
using namespace std;

char whiteboard[8][8] = {
	'W','B','W','B','W','B','W','B',
	'B','W','B','W','B','W','B','W',
	'W','B','W','B','W','B','W','B',
	'B','W','B','W','B','W','B','W',
	'W','B','W','B','W','B','W','B',
	'B','W','B','W','B','W','B','W',
	'W','B','W','B','W','B','W','B',
	'B','W','B','W','B','W','B','W'
};

char blackboard[8][8] = {
	'B','W','B','W','B','W','B','W',
	'W','B','W','B','W','B','W','B',
	'B','W','B','W','B','W','B','W',
	'W','B','W','B','W','B','W','B',
	'B','W','B','W','B','W','B','W',
	'W','B','W','B','W','B','W','B',
	'B','W','B','W','B','W','B','W',
	'W','B','W','B','W','B','W','B'
};
char arr[51][51];
int white(int x, int y) {
	int result= 0;
	for (int i = 0; i < 8; i++) {
		for (int j = 0; j < 8; j++) {
			if (arr[x + i][y + j] !=whiteboard[i][j]) {
				result++;
			}
		}
	}
	return result;
}
int black(int x, int y) {
	int result = 0;
	for (int i = 0; i < 8; i++) {
		for (int j = 0; j < 8; j++) {
			if (arr[x + i][y + j] != blackboard[i][j]) {
				result++;
			}
		}
	}
	return result;

}

int main() {
	int n, m;
	int result = 64;
	cin >> n>> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> arr[i][j];
		}
	}
	int cwhite, cblack;
	for (int i = 0; i<=n - 8; i++) {
		for (int j = 0;j<= m - 8; j++) {
			cwhite = white(i, j);
			cblack = black(i, j);
			if (cwhite < cblack) {
				result = (cwhite < result) ? cwhite : result;
			}
			else {
				result = (cblack < result) ? cblack : result;
			}
		
			
		}
	}
	cout << result;


}
