import { useState } from "react";
import "./ClimaActual.css";
import BuscarClimaCiudad from "../BuscarClimaCiudad/BuscarClimaCiudad";

function ClimaActual(props) {
    //Dclaro variables para mejor funcionamiento
    let temperatura,clima,ciudad,imagen;
    const fechaHoy = obtenerFechaHoy();
    const [buscador, setBuscador] = useState(false);

    function cambiarEstadoBuscador() {
        setBuscador(!buscador);
    }

    //si la informacion en data existe lo almacena en su variable
    if(props.data){
        console.log(props.data);
        temperatura =  kelvinACelsius(props.data.main.temp);
        clima = props.data.weather[0].main;
        ciudad = props.data.name;
        imagen = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    }

    //Obtengo la fecha de hoy en formarto deseado
    function obtenerFechaHoy() {
        const opciones = { weekday: 'short', day: 'numeric', month: 'short' };
        const fecha = new Date();
        return fecha.toLocaleDateString(undefined, opciones);
    }
      
    //la temperatura viene en kelvin asi que la conviertoa grados
    function kelvinACelsius(kelvin) {
        return Math.ceil(kelvin - 273.15);
    }

    if(buscador){
        return(
            <div className="ClimaActual-contenedor">
                <BuscarClimaCiudad funEstadoBuscador={cambiarEstadoBuscador} funCiudad={props.funCiudad} />
            </div>
        )
    }else{
        return(
        <div className="ClimaActual-contenedor">
            <button onClick={cambiarEstadoBuscador}>Search for places</button><br />
            <img src={imagen} alt="" />
            <p><span>{temperatura}</span>°C</p>
            <p>{clima}</p>
            <p>Today - {fechaHoy}</p>
            <p><i class="fa-solid fa-location-dot"></i> {ciudad}</p>
        </div>
    )
    }
}

export default ClimaActual;