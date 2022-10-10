#include <iostream>
#include <queue>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int N,K,TMP;
    cin>>N>>K;
    queue<int>q;
    for(int i=1; i<=N; i++){
        q.push(i);
    }
    cout<<"<";
    for(;q.size()>1;){
        for(int i=0; i<K-1; i++){
            TMP=q.front();
            q.push(TMP);
            q.pop();
        }
       
        TMP=q.front();
        cout<<TMP<<", ";
        q.pop();
    }
    TMP=q.front();
    cout<<TMP<<">\n";
  
}
