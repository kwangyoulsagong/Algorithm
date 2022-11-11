#include<iostream>
#include <map>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    map<int, int> map;
    int n,m;
    cin>>n;
    int num;
    for(int i=0; i<n; i++){
        cin>>num;
        map[num]++;
    }
    cin>>m;
    for(int i=0; i<m; i++){
        cin>>num;
       cout<< map[num]<<" ";
    }
    
    
    
}
