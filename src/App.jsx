import { useEffect, useState } from 'react'
import './App.css'
import ClimaActual from './Components/ClimaActual/ClimaActual';

function App() {
  const [weatherData, setWeatherData] = useState(null); // para datos de la api
  const [ciudad, setCiudad] = useState("ciudad de mexico"); //Para tener informacion de la ciudad
  const keyApi = "c9144b1482b501560d8aeb4b5b587356"
  let city = ciudad;
  //Funcion para actualizar data
  function actualizarData(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
    
  }

  //funcion para actualizar la ciudad
  function actualizarCiudad(city) {
    setCiudad(city);
    actualizarData();
  }

  useEffect(()=>{
    const getData = async () => {
      actualizarData();
    }

    getData();
  },[]);
  

  return (
    <>
     {<ClimaActual data={weatherData} funCiudad={actualizarCiudad} />}
    </>
  )
}

export default App
