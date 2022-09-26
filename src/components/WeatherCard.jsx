import React, { useState } from 'react'

const WeatherCard = ({weather, temperature, temperatureMin,temperatureMax}) => {

const [isCelsius, setIsCelsius] = useState(true)


const changeTemperature = () => setIsCelsius(!isCelsius)


{/*const changeTemperatureMin = () => setIsCelsius(!isCelsius)*/}


{/*const changeTemperatureMax = () => setIsCelsius(!isCelsius)*/}

    console.log(weather)

  return (
    <article className='card'>
        <h1 className='card__title'> Weather App</h1>
        <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
        <section className='card__first-section'>
          <img className='card_icon' src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
            : ''} alt=""/>
        </section>

        <section className='card__second-section'>
          <h3 className='second-title'>"{weather?.weather[0].description}"</h3>
          
        <ul className='second__list'>

          {/*<li className='second_item'><span className='second__span'>Temp min: </span>{weather?.main.temp_min} </li>*/}
          {/*<h3 className='card__temperature'>{isCelsius ? `${temperatureMin?.celsius} °C`: `${temperatureMin?.farenheit} °F `} </h3>*/}
          {/*<button className='card__btn' onClick={changeTemperatureMin}>{isCelsius ? 'Change to °F' : 'Change to °C'} </button>*/}

          {/*<li className='second_item'><span className='second__span'>Temp max: </span>{weather?.main.temp_max}°C</li>*/}
          {/*<h3 className='card__temperature'>{isCelsius ? `${temperatureMax?.celsius} °C`: `${temperatureMax?.farenheit} °F `} </h3>*/}
          {/*<button className='card__btn' onClick={changeTemperatureMax}>{isCelsius ? 'Change to °F' : 'Change to °C'} </button>*/}

          <li className='second_item'><span className='second__span'>Humidity: </span>{weather?.main.humidity}%</li>

          <li className='second_item'><span className='second__span'>Wind Speed: </span> {weather?.wind.speed}m/s</li>

          <li className='second_item'><span className='second__span'>Clouds: </span> {weather?.clouds.all}%</li>

          <li className='second_item'><span className='second__span'>Pressure: </span>{weather?.main.pressure}hPa</li>

        </ul>
        </section>

        <h2 className='card__temperature'>{isCelsius ? `${temperature?.celsius} °C`: `${temperature?.farenheit} °F `} </h2>
        <button className='card__btn' onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'} </button>

    </article>
  )
}

export default WeatherCard