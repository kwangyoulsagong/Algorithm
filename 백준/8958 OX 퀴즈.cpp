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
