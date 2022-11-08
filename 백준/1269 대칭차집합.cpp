#include<iostream>
#include <map>
#include <algorithm>
#include <stdio.h>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n,m;
    map<int,bool> map;
    cin>>n>>m;
    int a;
    for(int i=0; i<n; i++){
        cin>>a;
        map[a]=a;

        
    }
    for(int i=0; i<m; i++){
        cin>>a;
        if(map[a]==true){
            map.erase(a);
        }
    }
    cout<<map.size()<<"\n";
    
    
    
    
}
