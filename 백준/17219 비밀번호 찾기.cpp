#include<iostream>
#include <map>
#include <algorithm>
using namespace std;
int main(){
    int n,m;
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    cin>>n>>m;
    map<string, string> map;
    string link;
    string pwd;
    for(int i=0; i<n; i++){
        cin>>link>>pwd;
        map.insert(make_pair(link,pwd));
    }
    for(int i=0; i<m; i++){
        cin>>link;
        cout<<map[link]<<"\n";
    }
}
