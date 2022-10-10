#include <iostream>
#include <deque>>
#include <string>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t;
    cin>>t;
    string s;
    deque<int>q;
    for(int i=0; i<t; i++){
        cin>>s;
        if(s=="push_front"){
            int n;
            cin>>n;
            q.push_front(n);
        }
        else if(s=="push_back"){
            int n;
            cin>>n;
            q.push_back(n);
        }
        else if(s=="pop_front"){
            if(!q.empty()){
                cout<<q.front()<<"\n";
                q.pop_front();
            }
            else{
                cout<<-1<<"\n";
            }
        }
        else if(s=="pop_back"){
            if(!q.empty()){
                cout<<q.back()<<"\n";
                q.pop_back();
            }
            else{
                cout<<-1<<"\n";
            }
        }
        else if(s=="size"){
            cout<<q.size()<<"\n";
        }
        else if(s=="empty"){
            if(!q.empty()){
                cout<<0<<"\n";
            }
            else{
                cout<<1<<"\n";
            }
        }
        else if(s=="front"){
            if(!q.empty()){
                cout<<q.front()<<"\n";
            }
            else{
                cout<<-1<<"\n";
            }
        }
        else{
            if(!q.empty()){
                cout<<q.back()<<"\n";
            }
            else{
                cout<<-1<<"\n";
            }
        }
    }
    
  
}
