function updateCityTime() {
  let osloElement = document.querySelector("#oslo");
  let osloDateElement = osloElement.querySelector(".date");
  let osloTimeElement = osloElement.querySelector(".time");
  let osloTime = moment().tz("Europe/Oslo");
  osloDateElement.innerHTML = moment().format("MMMM Do YYYY");
  osloTimeElement.innerHTML = osloTime.format("h:mm:ss [<small>]A[</small>]");

  let bangkokElement = document.querySelector("#bangkok");
  let bangkokDateElement = bangkokElement.querySelector(".date");
  let bangkokTimeElement = bangkokElement.querySelector(".time");
  let bangkokTime = moment().tz("Asia/Bangkok");
  bangkokDateElement.innerHTML = moment().format("MMMM Do YYYY");
  bangkokTimeElement.innerHTML = bangkokTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = moment().format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesSelectElement.innerHTML = "Blah";
}

updateCityTime();
setInterval(updateCityTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
