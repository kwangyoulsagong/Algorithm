#include <iostream>
using namespace std;
int main(){
  int arr[1000];
  int C;
  cin>>C;
  for(int i=0; i<C; i++){
    int n;
    cin>>n;
    int sum=0;
    int avg=0;
    int count=0;
    double result=0;
    for(int j=0; j<n; j++){
      cin>>arr[j];
      sum+=arr[j];
      avg=sum/n;  
    }
    for(int j=0; j<n; j++){
      if(arr[j]>avg){
        count++;
      }
      result=double(count)/n*100;
      cout<<fixed;
      cout.precision(3);
    }
    cout<<result<<"%"<<"\n";
  }
}
