const demo = document.getElementById('demo');
const btn = document.getElementById('btn');

const myTime = () => {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  const currentTime = `${hour}:${min}:${sec}`
  document.getElementById("myClockDisplay").innerHTML = currentTime;
  setTimeout(myTime, 1000);
}
myTime();

function timeOfDay() {
  const theTime = new Date();
  const theHour = theTime.getHours();

  if (theHour >= 0 && theHour <= 11) {
    document.getElementById("timeOfDay").innerHTML = "Good Morning";
  } else if (theHour >= 12 && theHour <= 18) {
    document.getElementById("timeOfDay").innerHTML = "Good Afternoon";
  } else if (theHour >= 19 && theHour <= 23) {
    document.getElementById("timeOfDay").innerHTML = "Good Evening";
  } else {
    document.getElementById("timeOfDay").innerHTML = "Good Day";
  }
  setTimeout(timeOfDay, 1000);
}

timeOfDay();

const darkMode = () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

const toggleSwitch = () => { //Test Code delete after use
  let flag = true;
  flag = flag ? false : true;
  demo.innerHTML = flag;
}

/*if (darkMode) {
  darkMode = !darkMode;
  const p = document.createElement("p");
  p.innerHTML = `Dark Mode: Engaged`;
  demo.appendChild(p);
} else if (!darkMode) {
  p.innerHTML = `Dark Mode: Off`;
  demo.appendChild(p);
}*/

btn.addEventListener('click', toggleSwitch);
//Enable for the button be clicked and the saying pops up.
/*document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Test Successful!";
});*/
