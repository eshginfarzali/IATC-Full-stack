const createPassInp = document.getElementById("createPass")
const confrimPassInp = document.getElementById("confrimPass")
const createEmailInp = document.getElementById("createEmailInp")
const createBtn = document.getElementById("createbtn")

function createAcc() {
    if (createPassInp.value === confrimPassInp.value) {
        const email = createEmailInp.value;
        const password =createPassInp.value;
        localStorage.setItem("passData", JSON.stringify(password));
        localStorage.setItem("email", JSON.stringify(email));     
      window.location.href = "../index.html";
    } else{
        alert("something is wrong... try again")
    }
  }
  
  createBtn.addEventListener("click", createAcc);
  