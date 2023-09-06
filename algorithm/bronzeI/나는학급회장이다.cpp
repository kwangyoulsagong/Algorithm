#include <iostream>
#include <algorithm>
using namespace std;

class candidate{
    public: int num;
    public: int score[4];
    public: int vote[100];
    public: bool same=0;
};

bool cmp (candidate& x, candidate& y){

    if(x.score[0]==y.score[0]){
        if(x.score[3]==y.score[3]){
            if(x.score[2]==y.score[2]){
                if(x.score[1]==y.score[1]){
                    x.same=1;
                    y.same=1;
                    return x.score[1]<y.score[1];
                }
                else return x.score[1]<y.score[1];
            }
            else return x.score[2]<y.score[2];
        }
        else return x.score[3]<y.score[3];
    }
    else return x.score[0]<y.score[0];
}
int main2(){
    int student;
    cin>> student;
    vector<candidate> v;
    candidate input=candidate();
    for(int i=0; i<3; i++){
        input.num=i+1;
        v.push_back(input);
    }

    for(int i=0; i<student; i++){
        cin>>input.vote[0]>>input.vote[1]>>input.vote[2];
        v[0].score[0]+=input.vote[0];
        v[0].score[input.vote[0]]++;
        v[1].score[0]+=input.vote[1];   
        v[1].score[input.vote[1]]++;
        v[2].score[0]+=input.vote[2];
        v[2].score[input.vote[2]]++;

    }
    sort(v.begin(),v.end(),cmp);
    if(v[2].same!=1){
        cout<<v[2].num<<" "<<v[2].score[0];

    }
    else{
        cout<<0<<" "<<v[2].score[0];
    }
}