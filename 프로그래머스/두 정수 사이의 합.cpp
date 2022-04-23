#include <string>
#include <vector>
#include <iostream>

using namespace std;

long long solution(int a, int b) {
    long long answer = 0;
    if (a < b) {
        for (int i = a; i <= b; i++) {
            answer += i;
        }
    }
    if (a == b) {
        answer = a;
    }
    if (a > b) {
        for (int i = b; i <= a; i++) {
            answer += i;
        }
    }

    return answer;
}
int main() {
    int x, y;
    cin >> x >> y;
    cout << solution(x, y);
}