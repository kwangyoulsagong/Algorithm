#include <iostream>
using namespace std;
int main(){
  int H,M;
  int hour;
  int minute;
  cin>>H>>M;
  if(0<=H<=23 && 0<=M<=59){
    if(H>0 &&M<45){
      hour=H-1;
      minute(60-45)+M;
      cout<hour<<" "<<minute<<endl;  
    }
    else if(H>23&&M>=45){
      H=0;
      hour=H;
      minute=M-45;
      cout<<hour<<" "<<minute<<endl;
      
    }
    else if(H==0 && M<45){
      hour=23;
      minute(60-45)+M;
      cout<hour<<" "<<minute<<endl; 
    }
    else{
      minute=M-45;
      cout<H<<" "<<minute<<endl;
    }
      

}
