#include<iostream>
#include <map>
#include <algorithm>
using namespace std;
int main(){
    map<string, bool> word;
    int n,m;
    cin>>n>>m;
    string s;
    int count=0;
    for(int i=0; i<n; i++){
        cin>>s;
        word.insert(pair<string,bool>(s,true));
        
    }
    for(int i=0; i<m; i++){
        cin>>s;
        if(word[s]==true){
            count++;
        }
    }
    cout<<count;
    
    
}
