const dayInp = document.querySelector(".day-inp");
const monthInp = document.querySelector(".month-inp");
const yearInp = document.querySelector(".year-inp");
const main =document.querySelector("main")
const btn = document.querySelector("#btn");
const yearsResult = document.querySelector('.resault-years');
const monthsResult = document.querySelector('.resault-months');
const daysResult = document.querySelector('.resault-days');

const currentDate = new Date();

function getData() {
  const dayInpValue = dayInp.valueAsNumber;
  const monthInpValue = monthInp.valueAsNumber;
  const yearInpValue = yearInp.valueAsNumber;

  const isValidDate = validateDate(yearInpValue, monthInpValue, dayInpValue);

  if (isValidDate) {
    const hbdDate = new Date(yearInpValue, monthInpValue - 1, dayInpValue);
    const age = calculateAge(hbdDate);

    main.innerHTML=`
    <div class="resault-years"><span class="resault">${age.years}</span><span class="stc-res">years</span></div>
    <div class="resault-months"><span class="resault">${age.months}</span><span class="stc-res">months</span></div>
    <div class="resault-days"><span class="resault">${age.days}</span><span class="stc-res">days</span></div>`
    // yearsResult.textContent = `${age.years} years`;
    // monthsResult.textContent = `${age.months} months`;
    // daysResult.textContent = `${age.days} days`;
    document.querySelectorAll("input").forEach((e)=>e.style.border = "2px solid #716F6F")
  } else {

    document.querySelectorAll("input").forEach((e)=>e.style.border = "2px solid rgb(227, 48, 48)")

  }
}

function validateDate(year, month, day) {
  const currentDateYear = currentDate.getFullYear();
  const currentDateMonth = currentDate.getMonth() + 1;
  const currentDateDay = currentDate.getDate();

  if (
    year <= currentDateYear &&
    month >= 1 && month <= 12 &&
    day >= 1 && day <= 31 &&
    (year < currentDateYear ||
      (year === currentDateYear && month <= currentDateMonth) ||
      (year === currentDateYear && month === currentDateMonth && day <= currentDateDay))
  ) {
    return true;
  }

  return false;
}

function calculateAge(birthDate) {
  const diff = currentDate - birthDate;
  const years =Math.floor( diff / 1000 /60/60/24/365)
  const months =Math.floor(((( diff / 1000 /60/60/24/365) -years)*365)/30) 
  const days =Math.floor(Math.abs(((((( diff / 1000 /60/60/24/365) -years)*365)/310) -months)*30))

  return {
    years,
    months,
    days
  };
}

btn.addEventListener("click", getData);
