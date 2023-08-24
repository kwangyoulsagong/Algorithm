//O(n^2) 복잡도


#include <iostream>
#include <vector>
#include <cmath>
using namespace std;
double calc_dist(double x1, double y1, double x2, double y2) {
	return sqrt((x1 - x2) *(x1 - x2) + (y1 - y2) * (y1 - y2));// 두점사이에거리 공식
}
int main() {
	int N; cin >> N; // 정수 N 입력
	vector<double> x(N), y(N); // 벡터를 이용해 x 사이즈 y 사이즈
	
	for (int i = 0; i < N; i++) { cout << "입력"; cin >> x[i] >> y[i]; } // for문을 이용해 N개의 좌표를 입력
	double minimum_dist = 10000000.0;


	



	for (int i = 0; i < N; i++) {
		for (int j = i + 1; j < N; j++) {
			double dist_i_j = calc_dist(x[i], y[i], x[j], y[j]);// xi yi xj xj 사이의 거리 

			if (dist_i_j < minimum_dist) { // 사이거리를 비교해서 나중에 젤 적은거리 표시
				minimum_dist = dist_i_j;
			}
		}

	}
	cout << minimum_dist << endl;
}//책풀이





//내 풀이

#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

double distance(double x1, double x2, double y1, double y2){
    double result = sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
    return result;
}

int main(){
    int n;
    cin>>n;
    double minimum = 100000000;
    vector<double> x(n),y(n);
    for(int i = 0; i<n; i++){
        cin>>x[i]>>y[i];
    }
    
    for(int i =0; i<n; i++){
        for(int j= i+1; j<n; j++){
            double dist_i_j=distance(x[i], x[j], y[i], y[j]);
            
            if(dist_i_j<minimum){
                minimum=dist_i_j;
            }
        }
    }
    
    cout<<minimum;
}

