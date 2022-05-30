// one-dimensional array and top 

let a = '2051502';

// get midpoint = len/2-1
// let mid = a.charAt(a.length/2);
let mid = a.length/2-1;

// set top
let top=0;

// into stack
let stack = [];
for(let i = 0 ; i <= mid; i++){
stack.push(a.charAt(i))
top++;
  
}

for(let i = mid+2 ; i <= a.length; i++){
  if(a.charAt(i)!==stack[top-1]){
    break;
  }
  top--;
}
if(top ==0){
  console.log('yes');
}else{
  console.log('no');
}



