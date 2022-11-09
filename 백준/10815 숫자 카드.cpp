#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n,m;
    int s,k;
    vector<int>sa;
    vector<int>sk;
    cin>>n;
    int arr[500001];
    for(int i=0; i<n; i++){
        cin>>s;
        sa.push_back(s);
    }
    cin>>m;
    for(int i=0; i<m; i++){
        cin>>k;
        sk.push_back(k);
    }
    sort(sa.begin(),sa.end());
   
    for(int i=0; i<m; i++){
        int start=0;
        int end=n-1;
        while(start<=end){
            int mid=(start+end)/2;
            if(sa[mid]==sk[i]){
                arr[i]=1;
                break;
            }
            if(sa[mid]>sk[i]){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
        
    }
    for(int i=0; i<m; i++){
        cout<<arr[i]<<" ";
        
    }
    
   
    
    
}
