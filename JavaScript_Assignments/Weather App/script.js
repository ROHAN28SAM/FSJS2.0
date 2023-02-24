// declare variable for elements

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("Please Enter The City Name: ");
        return;
    }


    const city = inputBox.value;
  
    // Fetch Details

    const fetchLatLon = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=<api_key`
    );
    const orgLatLon = await fetchLatLon.json()
    let latLon = orgLatLon;
    console.log(latLon)
    let lat = latLon[0].lat;
    let lon = latLon[0].lon;
    console.log(lat);
    console.log(lon);

    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=<api_key>`)
    const orgData = await fetchData.json();
    let data = orgData;
    console.log(data);

    // Displaying the data in HTML
    countryName.innerHTML = data.sys.country;
    // stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity;
    windSpeed.innerHTML = data.wind.speed;
    temprature.innerHTML = data.main.temp;
    logoImage.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherStatus.innerHTML = data.weather[0].main;
};
