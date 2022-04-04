#include <iostream>
using namespace std;
int main(){
  int n;
  cin>>n;
  int result;
  for(int i=1; i<n; i++){
    result=i*(i+1)/2;
  }
  cout<<result<<endl;
}
