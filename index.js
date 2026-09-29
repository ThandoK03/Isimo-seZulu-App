function changeCity() {
  let city = prompt("Enter your city name?");
  let temperature = prompt("Enter the current temperature in your city?");
  let heading = document.querySelector("h1");
  if (temperature < 0) {
    heading.innerHTML = `🥶 <br> Currently ${temperature}° in ${city}`;
  } else if (temperature >= 0 && temperature <= 15) {
    heading.innerHTML = `😐 <br> Currently ${temperature}° in ${city}`;
  } else if (temperature > 15 && temperature <= 25) {
    heading.innerHTML = `😄 <br> Currently ${temperature}° in ${city}`;
  } else if (temperature > 25) {
    heading.innerHTML = `🥵 <br> Currently ${temperature}° in ${city}`;
  }

  changeCity();

  let changeButton = document.querySelector("button");
  changeButton.addEventListener("click", changeCity);
}
