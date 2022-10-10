#include <iostream>
#include<algorithm>
#include<queue>
using namespace std;

int main(){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int t;
    cin>>t;
    int n,m,ipt;
    int count=0;
    
    for(int i=0; i<t; i++){
        count=0;
        cin>>n>>m;
        queue<pair<int,int>>q;
        priority_queue<int>pq;
        for(int j=0; j<n; j++){
            cin>>ipt;
            q.push({j,ipt});
            pq.push(ipt);
        }
        for(;!q.empty();){
            int index=q.front().first;
            int value=q.front().second;
            q.pop();
            if(pq.top()==value){
                pq.pop();
                count++;
                if(index==m){
                    cout<<count<<"\n";
                    break;
                }
                
            }
            else{
                q.push({index,value});
            }
        }
    }

    
    
}
