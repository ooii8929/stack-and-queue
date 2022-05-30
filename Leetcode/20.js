
function vaild(s) {
   let bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
let heap = [];
    for(let i = 0 ; i < s.length ; i++){
        if(bracket[s[i]]){
            heap.push(bracket[s[i]]);
        }else{
            if(heap.pop() !== s[i]) return false;
        }
    }
    return !heap.length
}




// longest
// function vaild(s) {

//   if(s.length%2 !==0) return false;

//   let dist = {
//     '(': ')', 
//     '{':'}', 
//     '[' : ']'
//   }

//   let a = [];
//   for (let index = 0; index < s.length; index++) {

//     if(s.charAt(index) in dist){
//       a.push(s.charAt(index))
//     }

//     if(!(s.charAt(index) in dist)){
//       console.log(a);
//       if(dist[a[a.length-1]] === s.charAt(index)){
//         a.pop()
//       }else{
//         return false
//       }
//     }

//   }

//   return a.length === 0


  
// }

console.log(vaild("(}})"));



