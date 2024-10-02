const student = {
    name : "Marie",
    age: 20,
    courses : []
}
student.age = 21
student.grade = 'A'
student.courses.push('Math','Physics','Chemistry')
console.log(student.age, student.grade, student.courses);
console.log(student.courses.indexOf('Physics'))
console.log(student.courses.slice(0,2))

