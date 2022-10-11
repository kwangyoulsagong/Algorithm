#include <iostream>
#include <deque>

using namespace std;

int main() {

    ios::sync_with_stdio(0);
    cin.tie(0);
    int n,k,m;
    cin>>n>>k>>m;
    deque<int>q;
    for(int i=1; i<=n; i++){
        q.push_back(i);
    }
    int count=0;
    bool check=true;
    for(;!q.empty();){
        if(check){
            for(int i=0; i<k-1; i++){
                q.push_back(q.front());
                q.pop_front();
            }
            cout<<q.front()<<"\n";
            q.pop_front();
        }
        else{
            for(int i=0; i<k-1; i++){
                q.push_front(q.back());
                q.pop_back();
            }
            cout<<q.back()<<"\n";
            q.pop_back();
        }
        count++;
        if(count==m){
            check=!check;
            count=0;
        }
    }
        

    
   
}
