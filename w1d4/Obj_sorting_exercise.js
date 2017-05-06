var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//sorting by age(number) funtion
var sortAge = students.sort(function (a, b) {
  return b.age - a.age;
});
console.log("By Value", sortAge);

// sorting by name function

var sortName = students.sort(function (a, b){
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;

});

console.log("By Name:", sortName);