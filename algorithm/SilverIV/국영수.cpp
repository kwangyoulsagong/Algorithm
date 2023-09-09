#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
class grade{
    public: int num =0;
    public: int score[100];
    public: string name;



};

bool cmp(const grade& x, const grade& y){
    if(x.score[0] != y.score[0]){
        return x.score[0]>y.score[0];
    }
    else{
        if(x.score[1] != y.score[1]){
            return x.score[1]<y.score[1];
        }
        else{
            if(x.score[2] != y.score[2]){
                return x.score[2]>y.score[2];
            }
            else{
                return x.name<y.name;
            }
        }
    }
}

int main3(){

    int size=0;
    cin>>size;

    vector<grade> v(size);

    for(int i=0; i<size; i++){

        cin>>v[i].name>>v[i].score[0]>>v[i].score[1]>>v[i].score[2];

    }
    sort(v.begin(),v.end(), cmp);

    for(int i=0; i<size; i++){
        cout<<v[i].name<<"\n";
    }

}