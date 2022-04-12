#include <iostream>
using namespace std;
int d(int n){
  int temp=n;
  for(;n!=0;){
    temp=temp+n%10;
    n=n/10;
  }
  return temp;
}
int main(){
  int n=[10000]={1,},temp;
  for(int i=0; i<10000; i++){
    temp=d(i);
    if(temp<10000){
      n[temp]=1;
    }
  }
  for(int i=0; i<10000; i++){
    if(!n[i]){
      cout<<i<<"\n";
    }
  }
  
}
