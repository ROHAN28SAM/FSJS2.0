// declare variable for elements

const searchBox = document.getElementById("searchBox");

const cityName = document.getElementById("cityNameValue");
const stateName = document.getElementById("stateNameValue");
const countryName = document.getElementById("countryNameValue");

const currentTemperature = document.getElementById("currentTemperatureValue");
const maximumTemperature = document.getElementById("maximumTemperatureValue");
const minimumTemperature = document.getElementById("minimumTemperatureValue");
const windSpeed = document.getElementById("windSpeedValue");
const humidity = document.getElementById("HumidityValue");


const iconImage = document.getElementById("iconImage");
const weatherText = document.getElementById("weatherText");


// Forecast
// Max Temp
const forecast1MaxTemp = document.getElementById("forecast1MaxTempValue");
const forecast2MaxTemp = document.getElementById("forecast2MaxTempValue");
const forecast3MaxTemp = document.getElementById("forecast3MaxTempValue");
const forecast4MaxTemp = document.getElementById("forecast4MaxTempValue");
const forecast5MaxTemp = document.getElementById("forecast5MaxTempValue");

// Min Temp
const forecast1MinTemp = document.getElementById("forecast1MinTempValue");
const forecast2MinTemp = document.getElementById("forecast2MinTempValue");
const forecast3MinTemp = document.getElementById("forecast3MinTempValue");
const forecast4MinTemp = document.getElementById("forecast4MinTempValue");
const forecast5MinTemp = document.getElementById("forecast5MinTempValue");

// icon
const forecast1_image = document.getElementById("forecast1_image");
const forecast2_image = document.getElementById("forecast2_image");
const forecast3_image = document.getElementById("forecast3_image");
const forecast4_image = document.getElementById("forecast4_image");
const forecast5_image = document.getElementById("forecast5_image");


const firstDate = document.getElementById("date1");
const secondDate = document.getElementById("date2");
const thirdDate = document.getElementById("date3");
const forthDate = document.getElementById("date4");
const fifthDate = document.getElementById("date5");

const getData = async (event) => {
    event.preventDefault();
    if (!searchBox.value) {
        alert("Please Enter The City Name: ");
        return;
    }


    const city = searchBox.value;
  
    // Fetch Details

    // Fetch Lat Lon API
    const fetchLatLon = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=eef6fb6356c742e8922fb9cc9fa345fd`
    );
    const orgLatLon = await fetchLatLon.json()
    let latLon = orgLatLon;
    console.log(latLon)
    let lat = latLon[0].lat;
    let lon = latLon[0].lon;
    console.log(lat);
    console.log(lon);

    // Currrent Weather API
    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=<api_key>`)
    const orgData = await fetchData.json();
    let data = orgData;
    console.log(data);

    // Weather Forecast API
    const fetchForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=<api_key>`)
    const forecast = await fetchForecast.json();
    let forecastData = forecast;
    console.log(forecastData);


    // Displaying the data in HTML
    cityName.innerHTML = data.name;
    // stateName.innerHTML = data.location.region;
    countryName.innerHTML = data.sys.country;
    
    currentTemperature.innerHTML = data.main.temp;
    maximumTemperature.innerHTML = data.main.temp_max;
    minimumTemperature.innerHTML = data.main.temp_min;
    humidity.innerHTML = data.main.humidity;
    windSpeed.innerHTML = data.wind.speed;

    iconImage.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherText.innerHTML = data.weather[0].main;
    
    forecast1_image.src = `http://openweathermap.org/img/w/${forecastData.list[0].weather[0].icon}.png`;
    forecast2_image.src = `http://openweathermap.org/img/w/${forecastData.list[1].weather[0].icon}.png`;
    forecast3_image.src = `http://openweathermap.org/img/w/${forecastData.list[2].weather[0].icon}.png`;
    forecast4_image.src = `http://openweathermap.org/img/w/${forecastData.list[3].weather[0].icon}.png`;
    forecast5_image.src = `http://openweathermap.org/img/w/${forecastData.list[4].weather[0].icon}.png`;

    forecast1MaxTemp.innerHTML = forecast.list[0].main.temp_max;
    forecast2MaxTemp.innerHTML = forecast.list[1].main.temp_max;
    forecast3MaxTemp.innerHTML = forecast.list[2].main.temp_max;
    forecast4MaxTemp.innerHTML = forecast.list[3].main.temp_max;
    forecast5MaxTemp.innerHTML = forecast.list[4].main.temp_max;

    forecast1MinTemp.innerHTML = forecast.list[0].main.temp_min;
    forecast2MinTemp.innerHTML = forecast.list[1].main.temp_min;
    forecast3MinTemp.innerHTML = forecast.list[2].main.temp_min;
    forecast4MinTemp.innerHTML = forecast.list[3].main.temp_min;
    forecast5MinTemp.innerHTML = forecast.list[4].main.temp_min;


    firstDate.innerHTML = forecastData.list[0].dt_txt;
    secondDate.innerHTML = forecastData.list[1].dt_txt;
    thirdDate.innerHTML = forecastData.list[2].dt_txt;
    forthDate.innerHTML = forecastData.list[3].dt_txt;
    fifthDate.innerHTML = forecastData.list[4].dt_txt;
};
