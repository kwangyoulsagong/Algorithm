#include<iostream>
#include <set>
#include <algorithm>
using namespace std;
int main(){
    int n;
    cin>>n;
    string name;
    string attendence;
    set<string>com;
    for(int i=0; i<n; i++){
        cin>>name>>attendence;
        if(attendence=="enter"){
            com.insert(name);
        }
        else{
            com.erase(name);
        }
    }
    for(auto i=com.rbegin(); i!=com.rend(); i++){
        cout<<*i<<"\n";
    }
}
