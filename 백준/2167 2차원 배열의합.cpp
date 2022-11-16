#include<iostream>
using namespace std;
int main(){
    int n,m;
    cin>>n>>m;;
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int arr[301][301];
    int sum=0;
    for(int i=1; i<=n; i++ ){
        for(int j=1; j<=m; j++){
            cin>>arr[i][j];
        }
    }
    int t,i,j,x,y;
    cin>>t;
    for(int k=0; k<t; k++){
        cin>>i>>j>>x>>y;
        for(int hang=i; hang <=x; hang++ ){
            for( int ryoul=j; ryoul<=y; ryoul++ ){
                sum+=arr[hang][ryoul];
            }
        }
        
        cout<<sum<<"\n";
        sum=0;
    }
    
}
