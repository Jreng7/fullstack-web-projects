
const apiKey = '1754c7325aa39d03e97352b3f57cdd54'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=varginha'

async function checarClima(){

  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  let data = await response.json()

  document.querySelector('.cidade').innerHTML = data.name 
  document.querySelector('.temperatura').innerHTML = data.main.temp + ' °C'
  document.querySelector('.umidade').innerHTML = data.main.humidity + '%'
  document.querySelector('.vento').innerHTML = data.wind.speed + '  km/h'

}

checarClima()