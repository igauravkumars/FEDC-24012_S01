let students = [
    {name:"Gaurav",age:24,marks:{math:85,science:97,english:90}},
    {name:"Rahul",age:25,marks:{math:75,science:90,english:99}},
    {name:"Kunjan",age:27,marks:{math:97,science:98,english:95}}
]


let hightestmark = {name:"",averageMarks:-1}
for (let i of students){
   
   
    let mark = Object.values(i.marks)
  

   let average = mark.reduce((sum,curValue)=>{
    
      sum += curValue
      return sum

   },0)/mark.length

   if(hightestmark.averageMarks < average){
       hightestmark.averageMarks  = average
       hightestmark.name = i.name
   }

   console.log(`Averge marks of ${i.name} is ${average}`)


  
}
console.log(`${hightestmark.name} has highest average of ${hightestmark.averageMarks}`)





















































































































