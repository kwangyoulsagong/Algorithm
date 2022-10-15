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
    stack<int> st;
    int sum=0;
    int n;
    
    for(int i=0; i<t; i++){
        cin>>n;
        
        if(n){
            st.push(n);
            sum+=n;
        }
        else{
            if(n==0){
                sum-=st.top();
                st.pop();
            }
        }
        
        
    }
    cout<<sum<<"\n";
}
