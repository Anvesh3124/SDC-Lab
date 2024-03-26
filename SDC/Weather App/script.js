function getWeather() {
    var citySelect = document.getElementById("citySelect");
    var selectedCity = citySelect.options[citySelect.selectedIndex].value;
    var weatherConditions = ["Sunny", "Cloudy", "Rainy", "Snowy"];
    var randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];

    var weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = "Weather in " + selectedCity + ": " + randomCondition;
}