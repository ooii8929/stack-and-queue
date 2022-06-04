let students = [1,1,0,0]
let sandwiches = [0,1,0,1]
  let i = 0 ;
var countStudents = function(students, sandwiches) {

  console.log('run',students,sandwiches);
    if(students[0] === sandwiches[0]){
      // if student like sandwich
      students.shift();
      sandwiches.shift();

      // restart
      i = 0;
      
    }

    if(i>students.length-1){
          return students.length
    }else{
      i++;
      students.push(students.shift())
    }
      
    
    return countStudents(students,sandwiches)
    
    
};

console.log(countStudents(students,sandwiches));