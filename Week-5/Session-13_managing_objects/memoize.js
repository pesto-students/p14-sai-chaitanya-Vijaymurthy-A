// Hard coded list of temperature
const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

function getTemperature() {
  // Object for private cache
  let cityTemperature = {};

  // closure function to access the private cache
  function getTemperatureForCity(city) {
    if (Object.hasOwn(cityTemperature, city)) {
      return cityTemperature[city];
    }
    cityTemperature[city] = temperatureData[city];
    return cityTemperature[city];
  }
  return getTemperatureForCity;
}

// Creating reference
const getTemperatureForCity = getTemperature();

const temperature1 = getTemperatureForCity("New York");
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity("New York");
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity("London");
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity("London");
console.log(temperature4); // 18 (retrieved from cache) Hint:
