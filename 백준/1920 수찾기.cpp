#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n,m;
    cin>>n;
    int a;
    vector<int> aa;
    vector<int> ab;
    int arr[1000010];
    for(int i=0; i<n; i++){
        cin>>a;
        aa.push_back(a);
    }
    
    cin>>m;
    for(int i=0; i<m; i++){
        cin>>a;
        ab.push_back(a);
    }
    sort(aa.begin(),aa.end());
    
    for(int i=0; i<m; i++){
        int start=0;
        int end=n-1;
        while(start<=end){
            int mid=(start+end)/2;
            if(aa[mid]==ab[i]){
                arr[i]=1;
                break;
            }
            if(aa[mid]>ab[i]){
                end=mid-1;
            }
            else{
                start=mid+1;
            }

        }
        cout<<arr[i]<<"\n";
    }
}
