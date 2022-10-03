#include <iostream>
#include <algorithm>

using namespace std;
int main( ){
    int t;
    ios::sync_with_stdio(false);
    cin>>t;
    cin.tie(NULL);
    cout.tie(NULL);
    int count=0;
    int max=0;
    long long result;
    long long arr[100001];
    for(int i=0; i<t; i++){
        cin>>arr[i];
    }
    sort(arr,arr+t);
    result=arr[0];
    for(int i=1; i<t; i++){
        if(arr[i]==arr[i-1]){
            count++;
            if(max<count){
                max=count;
                result=arr[i];
            }
        }
        else
            count=0;
    }
    cout<<result;
    
}
