#include <iostream>
#include <algorithm>
using namespace std;
bool cmp(int a, int b){
    return a>b;
}

int main2143(){
    int n;
    int i=0;
    vector<int> v;
    cin>>n;
    for(; n>0; i++){
        v.push_back(n%10);
        n=n/10;
    }
    sort(v.begin(), v.end(), cmp);
    for(int j=0; j<i; j++){
        cout<<v[j];
    }

}