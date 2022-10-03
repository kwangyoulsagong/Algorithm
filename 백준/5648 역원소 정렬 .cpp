#include <iostream>
#include <algorithm>
#include<string>
#include<vector>

using namespace std;
int main(){
    long long t;
    cin>>t;
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    vector<string> v(t);
    vector<long long> answer;
    for(long long i=0; i<t; i++){
        cin>>v[i];
        long long r=0;
        long long num=stoll(v[i]);
        while (num != 0) {
                r *= 10;
                r += num % 10;
                num /= 10;
        }
    
        answer.push_back(r);
    }
   
    sort(answer.begin(),answer.end());
   
    for(long long i=0; i<t; i++){
        cout<<answer[i]<<"\n";
    
    }
    
 
 
    
}
