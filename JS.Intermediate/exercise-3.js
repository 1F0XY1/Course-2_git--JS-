let student = {
    name: null,
    age: null,
    hobby: "programming"
}

console.log(student);

student.id = 1000002315;
console.log(student);

delete student["hobby"];
console.log(student);

student.name = "Bekhan";
student.age = 20;
console.log(student);