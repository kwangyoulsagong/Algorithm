#include<iostream>
#include "algorithm"
#include <string>
using namespace std;
bool flag(string str){
    for(int i=0; i<str.size()/2; i++){
        if(str[i]!=str[str.size()-1-i]){
            return false;
        }
    }
    return true;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    for(;;){
        string n;
        cin>>n;
        if(n=="0"){
            break;
        }
      
        int cnt=0;
        while(!flag(n)){
            cnt++;
            int temp=stoi(n);
            temp++;
            string temps=to_string(temp);
            while(temps.size()<n.size()){
                temps="0"+temps;
            }
            n=temps;
            
        }
        cout<<cnt<<"\n";
        
    }
    
}
