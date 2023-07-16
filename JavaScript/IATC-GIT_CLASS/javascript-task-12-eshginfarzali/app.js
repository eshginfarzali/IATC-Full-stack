const tbody = document.querySelector("tbody");
const search = document.getElementById("search");
const rangeSelect = document.getElementById("rangeSelect");

let searchValue = "";
let currentSkip = 0;
let usersLimit = 100;

let selectedValue;

function createPagination(event) {
  if (event && event.target) {
    selectedValue = event.target.value;
    if (usersLimit !== Number(selectedValue)) {
      currentSkip = Number(selectedValue);
      usersLimit = 10;
      fetchUsers();
    }
  }
}

rangeSelect.addEventListener("change", createPagination);


async function fetchUsers() {
  try {
    const response = await fetch(
      `https://dummyjson.com/users?limit=${usersLimit}&skip=${currentSkip}`
    );
    const data = await response.json();
    const dataUsers = data.users;

    tbody.innerHTML = "";

    dataUsers.forEach((user) => {
      tbody.innerHTML += `
        <tr>
          <th scope="row">${user.id}</th>
          <td>${user.username}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.gender}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
          <td>${user.birthDate}</td>
          <td>${user.ip}</td>
          <td>${user.macAddress}</td>
        </tr> 
      `;
    });
  } catch (error) {
    console.log(error);
  }
}

async function searchUsers() {
  searchValue = search.value;
  currentSkip = 0; // Reset the skip value for the search
  try {
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${searchValue}&limit=${usersLimit}&skip=${currentSkip}`
    );
    const data = await response.json();
    const dataUsers = data.users;

    tbody.innerHTML = "";

    dataUsers.forEach((user) => {
      tbody.innerHTML += `
        <tr>
          <th scope="row">${user.id}</th>
          <td>${user.username}</td>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.gender}</td>
          <td>${user.email}</td>
          <td>${user.age}</td>
          <td>${user.birthDate}</td>
          <td>${user.ip}</td>
          <td>${user.macAddress}</td>
        </tr> 
      `;
    });
  } catch (error) {
    console.log(error);
  }
  createPagination();
}

search.addEventListener("input", searchUsers);

fetchUsers();
