#include <iostream>
#include <algorithm>

using namespace std;


bool comp( pair<int, int>& x , pair<int,int>&  y){
    if(x.second!=y.second){
        return x.second<y.second;
    }
    return x.first < y.first;
   
};
int main(){

    int n;
    cin>>n;
    vector<pair<int,int>>pos;
    for(int i=0; i<n; i++){
        int x, y;
        cin>>x>>y;
        pos.push_back(make_pair(x,y));
        
    }
    sort(pos.begin(),pos.end(),comp);

    for(int i=0; i<n; i++){
        cout<<pos[i].first<<" "<<pos[i].second<<"\n";
    }
    return 0;

}