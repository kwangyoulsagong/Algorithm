#include<iostream>
#include <map>
#include <algorithm>
using namespace std;
int main(){
    map<string, int> book;
    int n;
    cin>>n;
    int result=0;
    string s;
    int w;
    for(int i=0; i<n; i++){
        cin>>s;
        book[s]++;
        w=book[s];
    }
    for(auto i=book.begin(); i!=book.end(); i++){
        result=max(result, i->second);
    }
    for(auto j=book.begin(); j!=book.end(); j++){
        if(result== j->second){
            cout<<j->first;
            return 0;
        }
    }
    
    
}
