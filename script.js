
function googleSearch()
{
    let query = document.getElementById("SearchBox").value;
    if(query.trim() != "")
    {
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
}

document.getElementById("SearchBox").addEventListener("keypress",function(e)
{
    if(e.key == "Enter") googleSearch();

})

const displayTime = document.querySelector("#time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
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
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  document.querySelector("#date").innerHTML=`${dayNum}  ${months[month]} ${year} `;
}

updateDate();

const apiKey = "30d9c4789f4475e6beff792067530863";

console.log(apiKey);

const city = "Ghaziabad"; // Change this to your city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    document.querySelector("#city").innerHTML= `${data.name}`;
    //document.querySelector("#weather").innerHTML=`${data.main.temp}°C span<img id="icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">`;
    document.querySelector("#temp").innerHTML = 
  `${Math.round(data.main.temp,1)}°C`;

    document.querySelector("#weather").innerHTML=`${data.weather[0].main}<img id="icon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" "> `;
  })
  .catch(error => console.error("Error fetching weather data:", error));



// function lightMode()
// {
//   document.querySelector("html").style.background="white";
//   document.querySelectorAll("nav").forEach(item => {
//     item.style.color = "black"; // Change text color
//   });

//   document.querySelectorAll(".item:hover").forEach(item => {
//     item.style.color = "black"; // Change text color
//   });

// };

// lightMode();


fetch("https://quotes-api-self.vercel.app/quote").then(response => response.json()).then(data => {
  // console.log(data.quote);
  document.querySelector("#quote").innerHTML = `${data.quote}`
})
