// queue
let q1 = [2,4,1,2,5,6];
let q2 = [3,1,3,5,6,4];

q1Head = 0;
q1Tail = q1.length;

q2Head = 0;
q2Tail = q2.length;

// stq1ck => desk
let stack = [];
let top = -1;

let flag;

// if anyone has card, then start a round
while (q1Head !== q1Tail && q2Head !== q2Tail) {
  console.log('stack',stack);
  console.log('top',top);
  // q1 deal
  let t = q1.shift();
  // if q1 win
  for(let i = 0 ; i < top+1 ; i ++){
    if(t === stack[i]){
      console.log('q1 win');
      flag = 1;
      break;
    }else{
      flag = 0;
      break;
    }
  }
  if(flag == 1){
    q1Head++;
    q1[q1Tail] = t;
    q1Tail++;
    while(t !== stack[top]){
      q1[q1Tail] = stack[top];
      q1Tail++;
      top--;
    }
  }else{
    // q1 not win
    stack.push(t);
    q1Head++;
    top++;
  }
  
 // q2 deal
  t = q2.shift();
  // if q2 win
  for(let i = 0 ; i < top+1 ; i ++){
    if(t === stack[i]){
      console.log('q2 win');
      flag = 1;
      break;
    }else{
      flag = 0;
      break;
    }
  }
  if(flag == 1){
    q2Head++;
    q2[q2Tail] = t;
    q1Tail++;
    while(t !== stack[top]){
      q2[q2Tail] = stack[top];
      q2Tail++;
      top--;
    }
  }else{
    // q2 not win
    stack.push(t);
    q2Head++;
    top++;
  }
}


if(q1Head === q1Tail ){
  console.log('final q1 win');
}


if(q2Head === q2Tail ){
  console.log('final q2 win');
}

if(top>0){
  console.log('桌上的牌是');
  for (let index = 0; index < stack[top]; index++) {
   console.log('card',stack[index]);  
  }
}



