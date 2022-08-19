var mainObj = [
  {
    type: "",
    name: "Kapil",
    age: 21,
    status: "Active",
  }
];

var icons = [
  
];


var k = "<tbody>";
for (i = 0; i < mainObj.length; i++) {
  k += "<tr>";
  k += "<td>" + mainObj[i].name + "</td>";
  k += "<td>" + mainObj[i].age + "</td>";
  k += "<td>" + mainObj[i].status + "</td>";
  k += "</tr>";
}
k += "</tbody>";
document.getElementById("tableData").innerHTML = k;
