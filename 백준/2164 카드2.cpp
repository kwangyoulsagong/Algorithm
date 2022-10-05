#include <iostream>
#include<algorithm>
#include<queue>
using namespace std;

int main(){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    int n;
    cin>>n;
    int c;
    queue<int> q;
    for(int i=1; i<=n; i++){
        q.push(i);
    }

    for(;q.size()!=1;){
        q.pop();
        c=q.front();
        q.pop();
        q.push(c);
        
    }
    cout<<q.back()<<"\n";
    
}
