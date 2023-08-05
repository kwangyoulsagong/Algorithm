#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <math.h>
using namespace std;

int n, m, answer=-1;

vector<string> numArr;

int Square(int num){
    int root= sqrt(num);
    if(root * root == num){
        return num;
    }
    else{
        return -1;
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);
    
    
    cin>>n>>m;
    
    for(int i =0; i<n; i++){
        string str;
        cin>>str;
        numArr.push_back(str);
    }
    
    for(int a=0; a<n; a++){
        for(int b=0; b<m; b++){
            for(int da= -n+1; da<n; da++){
                for(int db=-m+1; db<m; db++){
                    if(da ==0 && db ==0){
                        continue;
                    }
                    int r= a, c =b;
                    string str="";
                    while (r>=0 && r<n && c>=0 && c<m) {
                        str+=numArr[r][c];
                        answer= max(answer,Square(stoi(str)));
                        r+=da;
                        c+=db;
                    }
                }
            }
        }
    }
    if(n==1 && m==1){
        cout <<Square(numArr[0][0]-'0');
    }
    else{
        cout << answer;
    }
    
    

}
