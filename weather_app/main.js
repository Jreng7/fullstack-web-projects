
const apiKey = '1754c7325aa39d03e97352b3f57cdd54'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=varginha'

async function checarClima(){

  const response = await fetch(apiUrl + `&appid=${apiKey}`)
  let data = await response.json()

  console.log(data)

  document.querySelector('.cidade').innerHTML = data.name

  
}

checarClima()