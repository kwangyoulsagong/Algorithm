#include<iostream>
using namespace std;
long long dp[101];
long long P(int n){
    if(n<3)return 1;
    if(dp[n]!=0)return dp[n];
    else
        dp[n]=P(n-2)+P(n-3);
    return dp[n];
}
int main(){
    int n,m;
    cin>>n;
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
 
    for(int i=0; i<n; i++){
        cin>>m;
        cout<<P(m-1)<<"\n";
       
    }
    
   
    
}
