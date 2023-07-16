const addNewLink = document.getElementById("addNewLink");
const resault = document.getElementById("resualt");
const emptyRes = document.querySelector(".resault-empty");
const linkSave = document.getElementById("linkSave");
let count = 0;
let links = [];

function getCreateLink(e) {
  const defr = document.createElement('div')
  defr.classList.add('resualt')
  e.preventDefault()
  linkSave.disabled = false;
  count++;
  emptyRes.style.display = "none";
  defr.innerHTML = `
      <div class="link">
        <div class="link-1">
          <img src="./assets/images/icon-drag-and-drop.svg" alt="" />
          <p>Link#${count}</p>
        </div>
        <div>
          <button class="remove">Remove</button>
        </div>
      </div>
      <p class="platform">Paltform</p>
      <div class="social-link">
        <div class="social">
          <select name="social" id="social-${count}">
            <option value="Github">Github</option>
            <option value="Gitlab">Gitlab</option>
            <option value="Email">Email</option>
            <option value="Linkedin">LinkedIn</option>
            <option value="Youtube">YouTube</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitch">Twitch</option>
            <option value="Devto">Dev.to</option>
            <option value="Codepen">Codepen</option>
            <option value="Codewars">Codewars</option>
            <option value="Freecodecamp">Freecodecamp</option>
            <option value="Frontend-Mentor">Frontend-Mentor</option>
            <option value="Stack Overflow">Stack Overflow</option>
          </select>
        </div>
        <div class="link-add-input">
          <p class="platform">Link</p>
          <input id="linkInp-${count}" value="" type="text" required placeholder="🔗 e.g https://github.com/eshginfarzali" />
        </div>
      </div>
  `;
  const removeButton = defr.querySelector('.remove');
  removeButton.addEventListener('click', removeLink);

  resault.append(defr);
}

function removeLink(e) {
  const linkElement = e.target.closest('.resualt');
  linkElement.remove();
}

function getSavedata() {
  links = [];
  const linkElements = document.querySelectorAll(".resualt");
  linkElements.forEach((linkElement) => {
    const platformSelect = linkElement.querySelector("select");
    const linkInput = linkElement.querySelector("input");
    const platformValue = platformSelect.value;
    const inputValue = linkInput.value;

    const linkObj = {
      platform: platformValue,
      link: inputValue,
    };

    links.push(linkObj);
  });

  localStorage.setItem("links", JSON.stringify(links));
}

addNewLink.addEventListener("click", getCreateLink);
linkSave.addEventListener("click", getSavedata);
