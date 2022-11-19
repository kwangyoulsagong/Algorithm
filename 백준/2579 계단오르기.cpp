#include<iostream>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin>>n;
    int arr[301];
    int dp[301];
    for(int i=1; i<=n; i++){
        cin>>arr[i];
    }
    dp[1]=arr[1];
    dp[2]=arr[1]+arr[2];//1계단
    if(arr[1]>arr[2]){
        dp[3]=arr[1]+arr[3];//2계단
    }
    else{
        dp[3]=arr[2]+arr[3];//1계단
    }
    for(int i=4; i<=n; i++){
        if(dp[i-3]+arr[i-1]>dp[i-2]){
            dp[i]=dp[i-3]+arr[i-1]+arr[i];
        }
        else{
            dp[i]=dp[i-2]+arr[i];
        }
    }
    cout<<dp[n];
    
    
    
}
