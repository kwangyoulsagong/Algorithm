#inlcude <iostream>
using namespace std;
int main(){
  int A,B,C;
  int arr[10]={};
  int result=A*B*C;
  for(;result!=0;){
    arr[result%10]++;
    result/=10;
  }
  for(int v:arr){
    cout<<v<<"\n"
  }
}
