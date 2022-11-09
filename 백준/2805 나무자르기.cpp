#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    long long n,m;
    cin>>n>>m;
    int h;
    long long result=0;
    int max=0;
    vector<int> v;
    for(int i=0; i<n; i++){
        cin>>h;
        v.push_back(h);
        if(h>=max){
            max=h;
        }
    }
    int start=0;
    int end=max;
    while(start<=end){
        long long sum=0;
        int mid=(start+end)/2;
        for(int i=0; i<n; i++){
            if(mid<v[i]) sum+=v[i]-mid;
        }
        if(sum>=m){
            if(result<mid){
                result=mid;
            }
            start=mid+1;
            
        }
        else{
            end=mid-1;
        }
    }
    cout<<result;
    
   
    
    
}
