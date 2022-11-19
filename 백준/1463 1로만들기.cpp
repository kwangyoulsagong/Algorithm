#include<iostream>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin>>n;
    int dp[1000000];
    for(int i=2; i<=n; i++){
        dp[i]=dp[i-1]+1;
        if(i%3==0){
            if(dp[i/3]+1<dp[i]){
                dp[i]=dp[i/3]+1;
            }
            else{
                dp[i]=dp[i];
            }
        }
        if(i%2==0){
            if(dp[i/2]+1<dp[i]){
                dp[i]=dp[i/2]+1;
            }
            else{
                dp[i]=dp[i];
            }
        }
    }
    cout<<dp[n];
    
    
}
