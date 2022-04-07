#include <iostream>
using namespace std;
int main(){
  string OX;
  int n;
  cin>>n;
  for(int i=0; i<n; i++;){
    cin>>OX;
    int sum=0;
    int result=0;
    for(int j=0; j<OX.length(); j++){
      if(OX[j]=='O'){
        sum++;
        result+=sum;
      }
      else
        sum=0;
    }
    cout<<result<<"\n";
  }
}


#include <iostream>
#include <cstring>
using namespace std;
int main() {
	int n;
	char arr[80];
	
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >>arr;
		int sum = 0;
		int result = 0;
		for (int j = 0; j < strlen(arr); j++) {
			if (arr[j] == 'O') {
				sum++;
				result += sum;
			}
			else
				sum = 0;
		}
		cout << result << "\n";
	}
	
	
	

	

	
}
