#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
using namespace std;



struct pos{
    int x, y;
};

int n, m;
int Min=99999999;

bool selected[13];
vector<pos> house;
vector<pos> chicken;
vector<pos> position;

int Distance(pos a, pos b){
    return abs(a.x - b.x) + abs(a.y - b.y);
}
void Min_Dist(){
    int result=0;
    for(int i=0; i< house.size(); i++){
        int min_dist=999999999;
        for(int j=0; j<position.size();j++){
            min_dist=min(min_dist,Distance(house[i], position[j]));
        }
        result+=min_dist;
    }
    Min=min(Min,result);
}
void find(int x, int z){
    if(z == m){
        Min_Dist();
    }
    for(int r=x; r<chicken.size(); r++){
        if(selected[r] == true)
            continue;
        selected[r] = true;
        position.push_back({chicken[r].x, chicken[r].y});
        find(r,z+1);
        selected[r]=false;
        position.pop_back();
        
    }
}

int main() {
    
    cin>>n>>m;
    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++){
            int input;
            cin>> input;
            if(input==1){
                house.push_back({i,j});
            }
            else if(input==2){
                chicken.push_back({i,j});
            }
        }
    }
  
    find(0,0);
    cout<<Min<<endl;
    return 0;

}
