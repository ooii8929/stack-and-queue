let qq = [6,3,1,7,5,8,9,2,4];

function decode(qq) {
  let ans = [];
  let head = 0;
  let tail = qq.length;

 while (head !== tail) {
    // qq first del
    ans.push(qq[head])
    head++;
  
    // qq second duplicate
    qq.push(qq[head])
    tail++;
  
    // qq second del
    head++;
 }

  

  return ans;

}

console.log(decode(qq));