//Date
let now = new Date();
let currentDate = document.querySelector("#current-date");
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
currentDate.innerHTML = `Today is   ${month} ${date}, ${day} ${hours}:${minutes}`;

//Search for a city and temperature (Homework week5)
function displayWeatherCondition(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let cityTemp = document.querySelector("#city-temp");
  cityTemp.innerHTML = `It is ${temperature}`;
}
function search(event) {
  event.preventDefault();

  //let searchInput = document.querySelector("#search-text-input");
  // let city = document.querySelector("#city");
  //if (searchInput.value) {
  // city.innerHTML = `City is ${searchInput.value}`;
  //} else {
  //city.innerHTML = null;
  //alert("Please type a city");
  //}

  let apiKey = "94cb208f357f0cd1dfe11e7e26d01feb";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//Search for current city and temperature (Homework week5)

function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "94cb208f357f0cd1dfe11e7e26d01feb";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}
let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", getCurrentPosition);
