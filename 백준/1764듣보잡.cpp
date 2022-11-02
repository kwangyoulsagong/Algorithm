#include <iostream>
#include <set>
using namespace std;
int main(){
    set<string> s;
    set<string> s2;
    int n,m;
    cin>>n>>m;
    string temp;
    for(int i=0; i<n; i++){
         cin>>temp;
        s.insert(temp);
    }
    for(int i=0; i<m; i++){
         cin>>temp;
        if(s.count(temp)){
            s2.insert(temp);
        }
    }
    cout<<s2.size()<<"\n";
    for(auto o:  s2){
        cout<<o<<" "<<"\n";
    }
}
