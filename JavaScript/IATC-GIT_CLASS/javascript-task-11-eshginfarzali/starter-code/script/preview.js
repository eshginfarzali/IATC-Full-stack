const linkResult = document.querySelector(".link-result");
const profileResault = document.querySelector(".profile-resault")


const storedLinks = JSON.parse(localStorage.getItem("links"));
const profileData =JSON.parse(localStorage.getItem("profileData"))
const profileImage =JSON.parse(localStorage.getItem("profileImage"))

if(profileData || profileImage){
    profileResault.innerHTML=`
    <div class="image">
    <img src="${profileImage}" alt="">
  </div>
  <p class="name">
    ${profileData[0]} ${profileData[1]}
  </p>
  <div class="email">${profileData[2]}</div>
    `
  
}

if (storedLinks) {
  storedLinks.forEach((link) => {
    linkResult.innerHTML += `<a href="${link.link}">
      <button>
        <div><img src="./assets/images/${link.platform}.svg" alt=""></div>
        <p>${link.platform}</p>
        <div><img src="./assets/images/icon-arrow-right.svg" alt=""></div>
        
      </button></a>
    `;
  });
}
