#include <iostream>
using namespace std;
int main(){
    string a,b;
    cin>>a>>b;
    int cnt=0;
    int min=50;
    for(int i=0; i<=b.length()-a.length(); i++){
        cnt=0;
        for(int j=0; j<a.length(); j++){
            if(a[j]!=b[i+j]){
                cnt++;
            }
        }
        if(min<=cnt){
            min=min;
        }
        else{
            min=cnt;
        }
    }
    cout<<min<<"\n";
}
