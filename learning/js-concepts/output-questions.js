let students = [{
    name: "Narasimhan",
    regNumber: "A001",
    score: 95
  },
  {
    name: "Ramesh",
    regNumber: "A002",
    score: 67
  },
  {
    name: "Karthik",
    regNumber: "A003",
    score: 92
  },
  {
    name: "Priya",
    regNumber: "A004",
    score: 78
  },
  {
    name: "Anitha",
    regNumber: "A005",
    score: 58
}]

let onlyNames = students.map((student) => student.name)
console.log(onlyNames.join(','))

let names = students.reduce((acc, curVal, index, arr) => {
    return acc.name ? (acc.name + ',' + curVal.name) : acc + ',' + curVal.name
})
console.log(names)

let passedStudentsNames = students.filter((student) => student.score > 80).map((st) => st.name)
console.log(passedStudentsNames.join(','))