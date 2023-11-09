// alert("hi");
import { user_data } from "./user_data.js";

function sortAge(a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    0;
  }
}

let ageTd = document.getElementById("age");

ageTd.addEventListener("click", function () {
  user_data.sort(sortAge);
  //   window.location.reload();
});

user_data.map(function (ele, index, array) {
  let tbody = document.querySelector("tbody");

  let tr = document.createElement("tr");

  let sNoTd = document.createElement("td");
  sNoTd.innerText = ele.id;

  let nameTd = document.createElement("td");
  nameTd.innerText = ele.name;

  let ageTd = document.createElement("td");
  ageTd.innerText = ele.age;

  let expTd = document.createElement("td");
  expTd.innerText = ele.experience;

  let techTd = document.createElement("td");
  techTd.innerText = ele.tech;

  let favTd = document.createElement("td");
  favTd.innerText = "❤️";

  tr.append(sNoTd, nameTd, ageTd, expTd, techTd, favTd);

  tbody.append(tr);
});

console.log(user_data);
