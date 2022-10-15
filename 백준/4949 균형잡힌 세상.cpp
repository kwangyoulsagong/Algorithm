#include <iostream>
#include <stack>
#include <string>
using namespace std;
int main(){
    ios::sync_with_stdio(0);
    cin.tie(NULL);
    cout.tie(NULL);
   
   
   
    for(;;){
        stack<char> s;
        string str;
        getline(cin,str);
        
        if(str=="."){
            break;
        }
        bool flag =true;
        for(int i=0; i<str.length(); i++){
          
            if(str[i]=='[' || str[i] =='('){
                s.push(str[i]);
            }
            else if(str[i] == ']'){
                if(s.empty()){
                    flag=false;
                    break;
                }
                else if(s.top() == '['){
                    s.pop();
                    
                }
                else if(s.top() == '('){
                    flag=false;
                    break;
                }
            }
            else if(str[i] == ')'){
                if(s.empty()){
                    flag=false;
                    break;
                }
                else if(s.top() == '('){
                    s.pop();
                    
                }
                else if(s.top() == '['){
                    flag=false;
                    break;
                }
            }
            
        }
        if(s.empty() && flag){
            cout<<"yes"<<"\n";
        }
        else
            cout<<"no"<<"\n";
    }
    return 0;
    
}
