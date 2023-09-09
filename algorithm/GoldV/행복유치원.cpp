#include <iostream>
#include <algorithm>
using namespace std;
bool cmp(int x, int y){
    return x<y;
}

int main(){
    int student, group;
    cin>>student>>group;
    int arr[student];
    int sum=0;
    vector<int> height;
    for(int i=0; i<student; i++){
        cin>>arr[i];
    }
    for(int i=0; i<student-1; i++){
        height.push_back(arr[i+1]-arr[i]);
    }
    sort(height.begin(),height.end(),cmp);
    for(int i=0; i<student-group; i++){
        sum+=height[i];
    }
    cout<<sum;
}