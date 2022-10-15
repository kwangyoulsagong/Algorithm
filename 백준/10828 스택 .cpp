#include <iostream>
#include <stack>
#include <string>
using namespace std;
int main(){
    ios::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
    int t;
    cin>>t;
    string s;
    stack<int> st;
    for(int i=0; i<t; i++){
        cin>>s;
        if(s=="push"){
            int n;
            cin>>n;
            st.push(n);
        }
        else if(s=="pop"){
            if(!st.empty()){
                cout<<st.top()<<"\n";
                st.pop();
            }
            else
                cout<<-1<<"\n";
        }
        else if(s=="size"){
            cout<<st.size()<<"\n";
        }
        else if(s=="empty"){
            if(!st.empty()){
                cout<<0<<"\n";
            }
            else
                cout<<1<<"\n";
        }
        else{
            if(!st.empty()){
                cout<<st.top()<<"\n";
            }
            else
                cout<<-1<<"\n";

        }
                    
    }
}
