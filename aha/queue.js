let qq = [6,3,1,7,5,8,9,2,4];

function decode(qq) {
  let ans = [];
  while(qq.length>0){
    ans.push(qq.shift());
    qq[qq.length-1] = qq.shift();

  }
  return ans
  
}

console.log(decode(qq));