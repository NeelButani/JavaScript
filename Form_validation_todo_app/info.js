let information = JSON.parse(localStorage.getItem("information"));
const tableBody = document.getElementById("table-body");

// sort algo
information.sort(function (a, b) {
  return a.Username.localeCompare(b.Username);
});
const displayData = () => {
  let display = information.map((item, id) => {
    return `<tr>
    <td>${item.Username}</td>
    <td>${item.Email}</td>
    <td>${item.Phonenumber}</td>
    <td>${item.Password}</td>
    <td>
    <button class="edit" onClick = "editIt(${id})">Edit</button>
    <button class="delete" onClick = "deleteIt(${id})" >Delete</button>
    </td>
    </tr>`;
  });
  display = display.join("");
  tableBody.innerHTML = display;
};
displayData();

// delete function
function deleteIt(id) {
  let deleteArr = [...information];
  deleteArr.splice(id, 1);
  information = [...deleteArr];
  localStorage.setItem("information", JSON.stringify(information));
  displayData();
}

function editIt(id) {
  let info = information[id];
  addid = id + 1;
  const child = document.querySelector(
    "#table-body tr:nth-child(" + addid + ")"
  );
  child.innerHTML = `<tr>
    <td><input type="text" id ="eUsername${id}"  value = "${info.Username}"></td>
    <td><input type="text" id = "eEmail${id}" value = "${info.Email}"></td>
    <td><input type="text" id = "ePhoneNumber${id}" value = "${info.Phonenumber}"></td>
    <td><input type="text" id = "ePassword${id}" value = "${info.Password}"></td>
    <td>
    <button class="save " onClick = "saveIt(${id})">Save</button>
    <button class="delete" onClick = "deleteIt(${id})" >Delete</button>
    </td>
    </tr>`;
}

function saveIt(id) {
  info = information[id];
  const eUsername = document.getElementById(`eUsername${id}`);
  const eEmail = document.getElementById(`eEmail${id}`);
  const ePhoneNumber = document.getElementById(`ePhoneNumber${id}`);
  const ePassword = document.getElementById(`ePassword${id}`);

  const eUsernameVal = document.getElementById(`eUsername${id}`).value;
  const eEmailVal = document.getElementById(`eEmail${id}`).value;
  const ePhoneNumberVal = document.getElementById(`ePhoneNumber${id}`).value;
  const ePasswordVal = document.getElementById(`ePassword${id}`).value;
  addid = id + 1;
  const savechild = document.querySelector(
    "#table-body tr:nth-child(" + addid + ")"
  );

  savechild.innerHTML = `<tr>
  <td>${eUsernameVal}</td>
  <td>${eEmailVal}</td>
  <td>${ePhoneNumberVal}</td>
  <td>${ePasswordVal}</td>
  <td>
  <button class="edit" onClick = "editIt(${id})">Edit</button>
  <button class="delete" onClick = "deleteIt(${id})" >Delete</button>
  </td>
  </tr>`;
  info.Username = eUsernameVal;
  info.Email = eEmailVal;
  info.Phonenumber = ePhoneNumberVal;
  info.Password = ePasswordVal;
  localStorage.setItem("information", JSON.stringify(information));
}
