import { useEffect, useState } from 'react'
import './App.css'
import ClimaActual from './Components/ClimaActual/ClimaActual';
import CardWeather from './Components/CardWeather/CardWeather';

function App() {
  const [weatherData, setWeatherData] = useState(null); // para datos de la api
  const [otherData, setOtherData] = useState(null);
  const keyApi = "c9144b1482b501560d8aeb4b5b587356"
  
  function actualizarOtherData(citys){
    console.log("entro");
    let city = citys ? citys : "cartagena";
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${keyApi}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        setOtherData(data.list.slice(0, 5));
        
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });

      console.log(otherData);
  }

  //Funcion para actualizar data
  function actualizarData(citys){
    let city = citys ? citys : "cartagena";
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
  function actualizarCiudad(citys) {
    actualizarData(citys);
    actualizarOtherData(citys);
  }

  useEffect(()=>{
    const getData = async () => {
      actualizarData();
      actualizarOtherData();
    }

    getData();
  },[]);
  

  return (
    <div className='contenedor-principal'>
      <ClimaActual data={weatherData} funCiudad={actualizarCiudad} />
      <div className='contenedor-2'>
        <div className='contenedor-2_1'>
        {
          otherData ? (
            otherData.map((el,i)=>(
              <CardWeather data={el} key={i} index={i}/>
            )) 
          ):"" 
        }
        </div>
        <h1 className='h1-principal'>Todays Hightlights</h1>
        <div className='contenedor-3'>
          <div className='mini-conter-3'>
            <h2>Wind status</h2>
            <p>{weatherData ? weatherData.wind.speed : ""} mph</p>
            <span> WSW</span>

          </div>
          <div className='mini-conter-3'>
            <h2>Visibility</h2>
            <p>{weatherData ? (weatherData.visibility/1000): ""} miles</p>
          </div>
          <div className='mini-conter-3'>
            <h2>Humidity</h2>
            <p>{weatherData ? weatherData.main.humidity:""} %</p>

          </div>
          <div className='mini-conter-3'>
            <h2>Air Pressure</h2>
            <p>{weatherData ? weatherData.main.pressure:""} mb</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
