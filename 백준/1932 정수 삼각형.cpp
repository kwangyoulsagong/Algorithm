#include<iostream>
#include <algorithm>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin>>n;
    int dp[500][500];
    int maxNum=0;
    for(int i=0; i<n; i++){
        for(int j=0; j<=i; j++){
            cin>>dp[i][j];
        }
    }
    for(int i=0; i<n; i++){
        for(int j=0; j<=i; j++){
            if(j==0){
                dp[i][j]=dp[i][0]+dp[i-1][0];
            }
            else if(i==j){
                dp[i][j]=dp[i][j]+dp[i-1][j-1];
            }
            else{
                dp[i][j]= max(dp[i][j]+dp[i-1][j-1],dp[i][j]+dp[i-1][j]);
            }
            if(maxNum>dp[i][j]){
                maxNum=maxNum;
            }
            else{
                maxNum=dp[i][j];
            }
        }
      
        
    }
    cout<<maxNum;
    
    
}
