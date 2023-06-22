const apiKey = "af60d6b681c5a3d2b78f92d51dd87a87";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const weatherCard = document.querySelector(".card");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  try {
    button.disabled = true;
    button.textContent = "Searching...";
    weatherCard.style.display = "block";

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      icon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "mist.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    alert('Enter correct city')
  } finally {
    button.disabled = false;
    button.textContent = "Search";
  }
}

button.addEventListener("click", () => {
  checkWeather(input.value);
});
