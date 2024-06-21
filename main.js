// 2 . 
var numberOfStudents=0
// 3 . 
function addStudent(){
    return numberOfStudents++
}
// 4 . 
function getNumberOfStudents(){
    return numberOfStudents
}
// 5 . 
var students=[]
// 6 . 
function addStudent(string){
    students.push(string)
}
// 7 . 
addStudent("aymen")
addStudent("iheb")
addStudent("chaker")
addStudent("hamza")
addStudent("mohamed")
// 8 . 
function clearStudents(){
    numberOfStudents=0
    students=[]
}
// 9 . 
function addStudent(){
    numberOfStudents=students.length
}
// 10 . 
function createFullName(firstName,lastName){
    return firstName+ " "+lastName
}
// 11 . 
addStudent(createFullName("fedi","chebbi"))
addStudent(createFullName("aymen","khalfa"))
addStudent(createFullName("mohamed","rtimi"))
addStudent(createFullName("chaker","adel"))
addStudent(createFullName("iheb","jandoubi"))
// 12 . 
// function getStudentByInitial(name,char){
//     if(name[0].toLowwerCase()=== char.toLowwerCase()){
//         return true
//     }
//     else {
//         return false
//     }
// }
// 13 . 
function isFullName(name){
    if(name.split(" ").length>1){
        return true
    }
    else {
        return false
    }
}
// 14 . (ahawka commentitha lfou9)
// 15 . 
function getStudentsByInitial(char){
    var arr=[]
    var i=0
    while(i<students.length){
        if(students[i][0].toLowwerCase()=== char.toLowwerCase()){
          arr.push(students[i])
        }
    i++
    }
    return arr
}
// 16 . 
function getStudentsByInitial(char1,char2){
    var arr=[]
    for(var i=0;i<students.length;i++){
        if(isFullName(students[i]) &&students[i].split(" ")[0][0]===char1 && students[i].split(" ")[1][0]===char2 ){
            arr.push(students[i])
        }
    }
    return arr 
}
// 17 .(m3awed martin) 
// 18 . 
// var student={
//     firstName:"",
//     lastName:"",
//     fullName:"",
//     email:"",
//     age:0,
//     education:""
// }
// 19 . 
student.firstName="fedi"
student.lastName="chebbi"
student.fullName="fedi chebbi"
student.email="fedichebbi3@gmail.com"
student.age=22
student.education="web development"
// 20 . 
function createStudent(firstName,lastName,email,age,education){
    var obj={}
    obj.firstName=firstName
    obj.lastName=lastName
    obj.fullName=createFullName(firstName,lastName)
    obj.email=email
    obj.age=age
    obj.education=education
    return obj
    }
    // 21 . (ahawka commintitou)
    // 22 . 
    var calledMe=createStudent("fedi","chebbi","fedichebi3@gmail.com",22,"web development")
    // 23 . 
    function addSkills(student,array){
        student.skills=array

    }
    // 24 . 
    function addSkills(student,array){
        for(var i=0;i<student.skills.length;i++){
            for(var j=0;j<array.length;j++){
                if(student.skills[i]!==array[j]){
                   student.skills.push(array[j])
                }
            }
        }
    }
    // 25 . 
   clearStudents()
   //    26 . 
calledMe=null
   // 27 . 
function addStudent(student){
    students.push(student)
}
// 28 . 
addStudent(createStudent("chaker","adel","chakeradel30@gmail.com",37,"web development"))
addStudent(createStudent("aymen","khalfa","khalfaaymen141@gmail.com",27,"web development"))
addStudent(createStudent("iheb","jandoubi","ihebjendoubi2012@hotmail.com",24,"web development"))
addStudent(createStudent("mohamed","rtimi","rtimim2003@gmail.com",25,"web development"))
addStudent(createStudent("hamza","foughali","hamzafougahli@gmail.com",28,"web development"))
// 29 . 
addSkills(students[1],["css","html"])
addSkills(students[3],["music","dance"])
addSkills(students[4],["darbouka","mezwed"])
// 30 .
function removeStudent(firstName){
    for(var i=0;i<students.length;i++){
        if(students[i].firstName===firstName){
            students.splice(i,1)
        }
    }
}
// 31 . 
function removeStudent(firstName){
    for(var i=0;i<students.length;i++){
        if(students[i].firstName===firstName){
            students.splice(i,1)
            numberOfStudents--
        }
    }
}
// 32 . 
function  isStudentOlderThan(student,age){
    if(student.age>age){
        return true
    }
    else {
        return false
    }
}
// 33 . 
function doesStudentHaveSkills(student){
    if(student.skills.length===0){
        false
    }
    else{
        return true
    }
}
// 34 . 
function isStudentQualified(student){
    if(isStudentOlderThan(student,18)===true && doesStudentHaveSkills(student)===true){
        return true
    }
    else {
        return false
    }
}
// 35 . 
function numberOfStudentsOlderThan(age){
    var num=0
    for(var i=0;i<students.length;i++){
        if(isStudentOlderThan(students[i],age)===true){
            num++
        }
    }
    return num
}
// 36 . 
function  getStudentsWithSkills(){
    var arr=[]
    for(var i=0;i<students.length;i++){
        if( getAllStudentsWithSkill(students[i])===true){
            arr.push(students[i])
        }
    }
    return arr
}
// 37 . 
function getAllStudentsWithSkill(skill){
var arr=[]
for(var i=0;i<students.length;i++){
    for(var j=0;j<students[i].skills;j++){
        if(skill===students[i].skills[j]){
            arr.push(students[i])
        }
    }
}
return arr
}