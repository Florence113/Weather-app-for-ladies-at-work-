//current date
let today = new Date().toLocaleDateString()
document.write(today);

const api= {
  key: "8b2ad74eb4a4ce7a88da438173ef4963",
  base: "https://api.openweathermap.org/data/2.5/"
}



const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(event){
  if(event.keyCode == 13){
    getResult(searchbox.value);
  }
}

function getResult(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather => {
    return weather.json();
  }).then(displayResult);
}

function displayResult(weather){
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector('.current .temp');
  temp.innerText = `${Math.round(weather.main.temp)} ºC`;
  
  let weather_element = document.querySelector('.current .weather');
  weather_element.innerText = weather.weather[0].main;
}





/*
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);
function setQuery(evt){
  if (evt.keycode == 13) {
    getResult(searchbox.value);
  }
}

function getResults(query){
  fetch(`${app.base}weather?q= ${query}&units=metric&APPID= ${apikey}`)
  .then(weather =>{
    return weather.json();
  }).then(displayResult);
}

function displayResult(weather){
 console.log(weather);
 let city = document.querySelector('.location .city');
 city.innerText= `${weather.name},${weather.sys.country}`;
 let now = new Date();
 let date = document.querySelector('.location .date');
 date.innerText = dateBuilder(now);

  let temp= document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>ºC`
  let weather_el = document.querySelector('.current. weather')
   weather_element.innerText = weather.weather[0].main;
}

function dateBuilder (d){
  let months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = days[d.getDay()];
let date = d.getDate();
month = months[d.getMonths()]
}
*/

