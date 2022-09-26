
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {
  //Guarda la longitud y latitud de geolocation
  const [coords, setCoords] = useState()

  //guardar el clima donde esta el usuario
  const [weather, setWeather] =useState()
    
  //Estado para guardar la temperatura!
  const [temperature, setTemperature] = useState()


  //const [temperatureMin, setTemperatureMin] = useState()


  //const [temperatureMax, setTemperatureMax] = useState()

  
  //Peticion
  useEffect(() => {
    //Esta es la funcion que se ejecuta cuando llega la indormacion de nuestra ubicacion

    const success = pos => {
      const obj ={
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj);
      }

      // Esto hace el llamado a la api del navegador para usarlo en la ubicacion actual

      navigator.geolocation.getCurrentPosition(success)
    }, [])

  console.log(coords)

  //----------Peticion del clima-------------

  useEffect(() => {
    if(coords){
    const APIKEY = '1cdc1187cb634131a047c2a916422c81'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
    //dos métodos de promesas
            .then( res => {
              const celsius = (res.data.main.temp - 273.15).toFixed(0)
              const farenheit = (celsius * 9/5 + 32).toFixed(0)
              setTemperature({celsius, farenheit})
              setWeather(res.data)
            })

            .catch( err => console.log(err))


 //           .then( res => {
 //           const celsius = (res.data.main.temp_min - 273.15).toFixed(0)             const farenheit = (celsius * 9/5 + 32).toFixed(0)
 //             setTemperatureMin({celsius, farenheit})
//              setWeather(res.data)
 //           })
//
 //           .catch( err => console.log(err))
//
//            .then( res => {
//              const celsius = (res.data.main.temp_max - 273.15).toFixed(0)
//              const farenheit = (celsius * 9/5 + 32).toFixed(0)
//              setTemperatureMax({celsius, farenheit})
 //             setWeather(res.data)
 //           })
//
 //           .catch( err => console.log(err))
      }
    }, [coords])

    //console.log(weather)
  

  return (
    <div className="App">
    { 
        weather ?
          <WeatherCard weather={weather} temperature={temperature} />
          :
          <Loading/>
      } 
      
    </div>
  )
}

export default App
