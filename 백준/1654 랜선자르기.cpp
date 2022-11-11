#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    vector<long long> arr;
    long long n, m;
    long long max=0;
    long long ans=1;
    cin>>n>>m;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        arr.push_back(a);
        if(max<a){
            max=a;
        }
    }
    long long start=1;
    long long end=max;
    while(start<=end){
        long long count=0;
        long long mid=(start+end)/2;
        for(int i=0; i<n; i++){
            count+=arr[i]/mid;
        }
        if(count>=m){
            if(ans<mid){
                ans=mid;
            }
            start=mid+1;
        }
        else{
            end=mid-1;
        }
        
    }
    cout<<ans<<" ";
    
    
   
    
    
}
