#include <iostream>
#include <algorithm>
#include <string>
using namespace std;
int Compare(string a, string b){
    int A=a.size();
    int B=b.size();
    if(A!=B)return A<B;
    int sum=0;
    int sum2=0;
    for(int i=0; i<a.size(); i++){
        if(a[i]>='0'&&a[i]<='9'){
            sum+=(int)(a[i]-'0');
        }
        if(b[i]>='0'&&b[i]<='9'){
            sum2+=(int)(b[i]-'0');
        }
    }
    if(sum!=sum2)return sum<sum2;
    return a<b;
}
int main(){
    int t;
    cin>>t;
    string s[50];
    for(int i=0; i<t; i++){
        cin>>s[i];
    }
    sort(s,s+t,Compare);
    for(int i=0; i<t; i++){
        cout<<s[i]<<"\n";
    }
    
}
