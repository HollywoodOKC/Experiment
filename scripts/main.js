const demo = document.getElementById('demo');
const btn = document.getElementById('btn');

function addZero(t) {
  if (t < 10) {
    t = '0' + t;
  }
  return t;
};

const myTime = () => {
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hour = addZero(hour);
  min = addZero(min);
  sec = addZero(sec);
  const currentTime = `${hour}:${min}:${sec}`
  document.getElementById("myClockDisplay").innerHTML = currentTime;
  setTimeout(myTime, 1000);
}
myTime();

function timeOfDay() {
  const theTime = new Date();
  const theHour = theTime.getHours();

  if (theHour >= 0 && theHour <= 11) {
    document.getElementById("timeOfDay").innerHTML = `Good Morning <i class="fa-solid fa-mug-saucer"></i>`;
  } else if (theHour >= 12 && theHour <= 17) {
    document.getElementById("timeOfDay").innerHTML = `Good Afternoon <i class="fa-solid fa-sun"></i>`;
  } else if (theHour >= 18 && theHour <= 23) {
    document.getElementById("timeOfDay").innerHTML = `Good Evening <i class="fa-solid fa-star"></i>`;
  } else {
    document.getElementById("timeOfDay").innerHTML = "Good Day";
  }
  setTimeout(timeOfDay, 1000);
}

timeOfDay();


const darkMode = () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
};

let flag = false;
demo.innerHTML = `Off <i class="fa-regular fa-lightbulb">`;

const toggleSwitch = () => {
  flag = flag ? false : true;


  if (flag === true) {
    darkMode();
    demo.innerHTML = `Engaged <i class="fa-solid fa-lightbulb"></i>`;
  } else {
    !darkMode();
    demo.innerHTML = `Off <i class="fa-regular fa-lightbulb">`;
  }
};

btn.addEventListener('click', toggleSwitch);