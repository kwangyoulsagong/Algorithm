#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>
using namespace std;


//복잡도 Orootn
bool is_prime(int n){
    if(n<=1) return false;
    for(int p = 2; p*p<=n; p++){
        if(n%p==0) return false;
    }
    return true;
}

int main(){
    int n;
    cin>>n;
    bool answer=is_prime(n);
    cout<< answer;
    
}
