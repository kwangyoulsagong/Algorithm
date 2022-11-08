#include<iostream>
#include <map>
#include <algorithm>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin>>n;
        map<string,int> m;
    string name;
    for(int i=0; i<n; i++){
        cin>>name;
        m[name]++;
    }
    for(int i=0; i<n-1; i++){
        cin>>name;
        m[name]--;
    }
    string ans;

    for(auto o:m){
        if(o.second!=0){
            ans=o.first;
        }
       
    }
    cout<<ans;
    
}
