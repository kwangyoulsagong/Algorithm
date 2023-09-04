#include <iostream>
#include <algorithm>
using namespace std;

int main(){

    int n;
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cin>>n;
    int array[10001]={0};
    int number;
    for(int i=0; i<n; i++){
        cin>>number;
        array[number]++;
       
        
    }
    for(int i=0; i<10001; i++){
       for(int j=0; j<array[i]; j++){
        cout<<i<<"\n";
       }
    }

  
   
    
}