import { user_data } from "./user_data.js";

function sortAge(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    0;
  }
}

let tableBodys = document.getElementById("tbody");

displayData();

let ageTd = document.getElementById("age");

ageTd.addEventListener("click", function () {
  user_data.sort(function (a, b) {
    return a.age - b.age;
  });
  displayData();
});

let experienceTd = document.getElementById("experienceTd");

experienceTd.addEventListener("click", function () {
  user_data.sort(function (a, b) {
    return a.experience - b.experience;
  });
  displayData();
});

let nameTd = document.getElementById("name");

nameTd.addEventListener("click", function () {
  user_data.sort(sortAge);
  displayData();
});

function displayData() {
  tableBodys.innerHTML = "";

  user_data.map(function (ele, index, array) {
    let tbody = document.querySelector("tbody");

    let tr = document.createElement("tr");

    let sNoTd = document.createElement("td");
    sNoTd.innerText = index + 1;

    let nameTd = document.createElement("td");
    nameTd.innerText = ele.name;

    let ageTd = document.createElement("td");
    ageTd.innerText = ele.age;

    let expTd = document.createElement("td");
    expTd.innerText = ele.experience;

    let techTd = document.createElement("td");
    techTd.innerText = ele.tech;

    let favTd = document.createElement("td");
    favTd.innerText = "💖";

    tr.append(sNoTd, nameTd, ageTd, expTd, techTd, favTd);

    tbody.append(tr);
  });
}

console.log(user_data);
