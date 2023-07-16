const email = document.getElementById("email");
const passWord = document.getElementById("password");
const loginBtn = document.querySelector(".btn-login");

function getLogin() {
    const pass = JSON.parse(localStorage.getItem("passData"));   

    const mail = JSON.parse(localStorage.getItem("email"));
 
  console.log({pass , mail});

  if (email.value ===mail && passWord.value === pass) {
    window.location.href = "../../starter-code/links.html";
  } else {
    alert("is not defined");
  }
}

loginBtn.addEventListener("click", getLogin);
