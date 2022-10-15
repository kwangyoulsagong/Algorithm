#include <iostream>
#include <stack>
#include <string>
using namespace std;
int main(){
    ios::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin>>n;
    int count=0;
    
    string s;
    for(int i=0; i<n; i++){
        stack<char>st;
        cin>>s;
        for(int j=0; j<s.length(); j++){
            if(st.empty()){
                st.push(s[j]);
            }
            else if(st.top()==s[j]){
                st.pop();
            }
            else{
                st.push(s[j]);
            }
        }
        if(st.empty()){
            count++;
        }
    }
    cout<<count<<"\n";
    return 0;
    
}
