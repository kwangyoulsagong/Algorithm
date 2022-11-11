#include<iostream>
#include "algorithm"
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int sum=0;
    int arr[100000];
    for(int i=0; i<9; i++){
        cin>>arr[i];
        sum+=arr[i];
    }
    sort(arr,arr+9);
    for(int i=0; i<9; i++){
        for(int j=i+1; j<9; j++){
            if(sum-(arr[i]+arr[j])==100){
                for(int k=0; k<9; k++){
                    if(i==k || j==k){
                        continue;
                    }
                    cout<<arr[k]<<"\n";
                }
                return 0;
            }
        }
    }
    
    
    
}
