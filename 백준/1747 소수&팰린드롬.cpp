#include <iostream>
#include <string>
using namespace std;
bool flag(int n){
    string str=to_string(n);
    for(int i=0; i<str.size()/2; i++){
        if(str[i]!=str[str.size()-1-i]){
            return false;
        }
    }
    return true;
}
bool isPrime[1003002];
void eratos(){
    for(int i=2; i<=1003002; i++){
        isPrime[i]=true;
    }
    isPrime[0]=false;
    isPrime[1]=false;
    for(int i=2; i<=1003002; i++ ){
        for(int j=2; j*j<=i; j++){
            if(i%j==0){
                isPrime[i]=false;
                break;
            }
        }
    }
    
}
int main(){
    int n;
    cin>>n;
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    eratos();
    for(int i=n; i<1003002; i++){
        if(isPrime[i]==false){
            continue;
        }
        if(flag(i)){
            cout<<i<<" ";
            break;
        }
    }
}
