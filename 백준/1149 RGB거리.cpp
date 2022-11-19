#include<iostream>
#include <algorithm>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin>>n;
    int result;
    int dp[1001][3];
    dp[0][0]=0;
    dp[0][1]=0;
    dp[0][2]=0;
    int cost[3];
    for(int i=1; i<=n; i++){
        cin>>cost[0]>>cost[1]>>cost[2];
        dp[i][0]=min(dp[i-1][1],dp[i-1][2])+cost[0];
        dp[i][1]=min(dp[i-1][0],dp[i-1][2])+cost[1];
        dp[i][2]=min(dp[i-1][1],dp[i-1][0])+cost[2];
    }
    if(dp[n][0]<dp[n][1]){
        result=dp[n][0];
    }
    else{
        result=dp[n][1];
    }
    if(dp[n][2]<result){
        cout<<dp[n][2];
    }
    else{
        cout<<result;
    }
    
}
