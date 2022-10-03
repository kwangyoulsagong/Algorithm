#include <iostream>
#include<algorithm>
#include<string>
#include <vector>
using namespace std;
bool Compare(string a, string b){
    int A=a.size();
    int B=b.size();
    if(A!=B)return A<B;
    
    return a<b;
}
int main(){
    int t;
    cin>>t;
    vector<string> v;
    for(int i=0; i<t; i++){
        string s;
        cin>>s;
        v.push_back(s);
        
    }
    sort(v.begin(),v.end(),Compare);
    for(int i=0; i<v.size(); i++){
        if(v[i]==v[i+1]){
            continue;
        }
        cout<<v[i]<<"\n";
    }
}
#include <iostream>
#include<algorithm>
#include<string>
#include <vector>
using namespace std;
bool Compare(string a, string b){
    int A=a.size();
    int B=b.size();
    if(A!=B)return A<B;
    
    return a<b;
}
int main(){
    int t;
    cin>>t;
    vector<string> v;
    for(int i=0; i<t; i++){
        string s;
        cin>>s;
        if(find(v.begin(),v.end(), s) == v.end())
          v.push_back(s);

    }
    sort(v.begin(),v.end(),Compare);
    for(int i=0; i<v.size(); i++){
        
        cout<<v[i]<<"\n";
    }
}

