#include<iostream>
#include<map>
#include<string>
#include <vector>
using namespace std;
int main(){
    int n,m;
    map<string, int> pokemon;
    cin>>n>>m;
    string name;
    vector<string> pokedex;
    vector<string> result;
    for(int i=1; i<=n; i++){
        cin>>name;
        pokedex.push_back(name);
        pokemon.insert(make_pair(name,i));
    }
    for(int i=0; i<m; i++){
        cin>>name;
        if(name[0]>=65 && name[0]<=90){
            result.push_back(to_string(pokemon[name]));
        }
        else{
            result.push_back(pokedex[stoi(name)-1]);
        }
    }
    for(auto o:result){
        cout<<o<<"\n";
    }
    
}
