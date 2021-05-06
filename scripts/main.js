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
    document.getElementById("timeOfDay").innerHTML = `Good Morning`;
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

/*document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Test Succesful!";
});*/
