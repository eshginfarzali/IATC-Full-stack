const saveProfileBtn = document.getElementById("saveProfile");
const firstName =document.getElementById("firstname");
const laststName =document.getElementById("laststname");
const email =document.getElementById("email");
const fileImage =document.getElementById("fileImage");

function saveDateProfile() {
    const firstNameValue = firstName.value;
    const lastNameValue = laststName.value;
    const emailValue = email.value;
  
    if (firstNameValue.length < 3) {
      firstName.style.outline = '2px solid #ff3939';
    }
  
    if (lastNameValue.length < 3) {
      laststName.style.outline = '2px solid #ff3939';
    }
  
    if (firstNameValue.length >= 3 && lastNameValue.length >= 3) {
      const profileData = [firstNameValue, lastNameValue, emailValue];
      localStorage.setItem("profileData", JSON.stringify(profileData));
    }
}

saveProfileBtn.addEventListener("click", saveDateProfile)



function base64Img(file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const base64 = reader.result;
      localStorage.setItem("profileImage", JSON.stringify(base64));
    });
    reader.readAsDataURL(file);
  }
  
  const uploadImage = document.getElementById("uploadImage");
  
  fileImage.addEventListener("change", ({ target: { files: { 0: file } } }) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
  
    uploadImage.style.backgroundImage = `url(${image.src})`;
    uploadImage.style.backgroundSize = "cover";
  
    base64Img(file);
  });
  
  