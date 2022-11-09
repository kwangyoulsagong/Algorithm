#include<iostream>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    long long s;
    cin>>s;
    int result=0;
    int n=1;
    long long sum=0;
    for(;;){
        sum+=n;
        if(sum<=s){
            result++;
            
        }else{
            break;;
        }
        n++;
    }
    cout<<result;
 
    
    
}
