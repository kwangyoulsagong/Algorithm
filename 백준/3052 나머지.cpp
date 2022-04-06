#include <iostream>
using namespace std;
int main(){
  arr[42]={};
  int number;
  int result=0;
  for(int i=0; i<10; i++){
    cin>>number;
    arr[number%42]++;
  }
  for(int number:arr){
    if(number!=0){
      result++;
    }
  }
  cout<<result<<"\n"
}
