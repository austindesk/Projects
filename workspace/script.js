const apiKey = '4f0455669ae5fd7f0481144d8c31160d';  // Replace with your actual API key


document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const country = document.getElementById('countryInput').value;
    if (city && country) {
        fetchWeather(city, country);
    } else {
        alert("Please enter both city and country code!");
    }
});

function fetchWeather(city, country) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').innerText = data.name;
                document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
                document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            } else {
                alert("City not found!");
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
