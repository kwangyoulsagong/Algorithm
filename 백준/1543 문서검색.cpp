#include <iostream>
#include <string>
using namespace std;
int main(){
    string a,b;
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    getline(cin,a);
    getline(cin,b);
    int cnt=0;
    for(int i=0; i<a.length(); i++){
        bool flag=true;
        for(int j=0; j<b.length(); j++){
            if(a[i+j]!=b[j]){
                flag=false;
            }
        }
        if(flag){
            cnt++;
            i+=b.length()-1;
        }
    }
    cout<<cnt;
}
