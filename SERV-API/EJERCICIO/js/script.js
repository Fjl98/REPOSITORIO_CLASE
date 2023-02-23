

let container = document.getElementById("coontainer");
let searchForm = document.getElementById("search_submit");
let searchInput = document.getElementById("search_input");
let temperaturesDegrees = document.getElementById("degreeNumber");
let weatherIcon = document.getElementById("weatherIcon");
let temperatureDescription = document.getElementById("description");
let timeZone = document.getElementById("timezone");
let date = document.getElementById("date");
let min = document.getElementById("min");
let max = document.getElementById("max");


const getWeatherData = async (city)=>{
   const res = await fetch(`https://openweather43.p.rapidapi.com/weather?q=${city}&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=undefined&units=metric&lang=sp`, {

   "headers": {
    "X-RapidAPI-Key": "48ba8b96f8mshc868a2b7fdafb60p101437jsnfd84798f0952",
    "X-RapidAPI-Host": "openweather43.p.rapidapi.com"

    }});
    const data = res.json();
    console.log(data);




}

window.onload= ()=>{
    getWeatherData("Sevilla");
}





