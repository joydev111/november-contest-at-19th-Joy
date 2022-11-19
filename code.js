let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

Employee = () => {
  var filteredArray = employeeArr.filter(filteredEmployee);
  var text = "";
  filteredArray.forEach(myFun);

  function myFun(user) {
    text +=
      user.id +
      "."+ " " +"Name : "+
      user.name +
      " " +"Age  : "+
      user.age +" "+
      "Profession : " +
      user.profession +
      ":" +
      "<br>";
  }
  document.getElementById("item").innerHTML = text;
};

filteredEmployee = (employee) => {
  if (selectedValue == "profession") {
    return true;
  }
  return employee.profession == selectedValue;
};
Employee();