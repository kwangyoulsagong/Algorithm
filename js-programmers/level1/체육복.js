function solution(n, lost, reserve) {
    var answer = n - lost.length;
    let count = 0;
    let tmep=[];
    for(let i=0; i<lost.length; i++){
             if (reserve.includes(lost[i])) {
                 reserve = reserve.filter((ele) => ele !== lost[i])
                count++;
                
            } 
            else{
                tmep.push(lost[i])
            }

    }
    lost=tmep.sort()

    for (let i = 0; i < lost.length; i++) {
           if (reserve.includes(lost[i] - 1  ) ){
                count++;
                reserve = reserve.filter((ele) => ele !== lost[i]-1)
           
            }
            else{
                if(reserve.includes(lost[i] + 1 )){
                    count++;
                     reserve = reserve.filter((ele) => ele !== lost[i]+1)
           
                }
            }

    }

    answer += count;
    return answer;
}
