#include <iostream>
#include<algorithm>
#include<string>
#include <vector>
using namespace std;
int Compare(pair<int, string>a,pair<int, string>b){
    return a.first<b.first;
}

int main(){
    int t;
    cin>>t;
    pair<int,string> p;
    vector<pair<int,string>> arr;
    for(int i=0; i<t; i++){
        cin>>p.first>>p.second;
        arr.push_back(p);
       
    }
    stable_sort(arr.begin(),arr.end(),Compare);
    for(int i=0; i<t; i++){
        cout<<arr[i].first<<" "<<arr[i].second<<"\n";
    }

    
}
