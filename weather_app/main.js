
const apiKey = '1754c7325aa39d03e97352b3f57cdd54'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const botaoPesquisa = document.querySelector('.box-search button')
const cidadeEstado = document.querySelector('.box-search input')
const climaTempoIcon = document.querySelector('.clima-icon')


async function checarClima(cidadeNome, estadoNome, pais){

  const response = await fetch(`${apiUrl}${cidadeNome},${estadoNome},${pais}&appid=${apiKey}`)

  if ( response.status == 404 ){

    document.querySelector('.error').style.display = 'block'
    document.querySelector('.clima').style.display = 'none'

  } else {

    let data = await response.json()

    if( data.weather[0].main == 'Clouds' ){
      climaTempoIcon.src = 'images/nublado.png'
    } else if ( data.weather[0].main == 'Clear' ){
      climaTempoIcon.src = 'images/sol.png'
    } else if ( data.weather[0].main == 'Rain' ) {
      climaTempoIcon.src = 'images/chuva.png'
    } else if ( data.weather[0].main == 'Drizzle' ){
      climaTempoIcon.src = 'images/chuvisco.png'
    } else if ( data.weather[0].main == 'Mist' ) {
      climaTempoIcon.src = 'images/neblina.png'
    }
  }


  document.querySelector('.cidade').innerHTML = data.name + ' -'
  document.querySelector('.temperatura').innerHTML = Math.round(data.main.temp) + ' °C'
  document.querySelector('.umidade').innerHTML = data.main.humidity + '%'
  document.querySelector('.vento').innerHTML = data.wind.speed + ' km/h'
  document.querySelector('.estado').innerHTML = estadoNome

  document.querySelector('.clima').style.display = 'block'

}


botaoPesquisa.addEventListener('click', ()  => {

  let entradaCidade = cidadeEstado.value.trim()
  let partesArrayString = entradaCidade.split(',')

  let cidadeNome = partesArrayString[0].trim()
  let estadoNome = partesArrayString[1].trim()
  let pais = partesArrayString[2].trim()

  checarClima(cidadeNome, estadoNome, pais)

})
