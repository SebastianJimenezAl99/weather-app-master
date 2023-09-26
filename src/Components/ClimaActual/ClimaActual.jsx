import { useState } from "react";
import "./ClimaActual.css";
import BuscarClimaCiudad from "../BuscarClimaCiudad/BuscarClimaCiudad";

function ClimaActual(props) {
    const [ciudades , setCiudades] = useState(["Cartagena", "Medellin", "London" ]);

    function buscarCiudad(ciudad){
        let array = ciudades;
        if (ciudad) {
            if(array.includes(ciudad)) {
                let i = array.indexOf(ciudad);
                array.splice(i, 1);
                array.push(ciudad);
            }else{
                array.shift()
                array.push(ciudad);
                setCiudades(array);
            }
           
        }
    }
    //Dclaro variables para mejor funcionamiento
    let temperatura,clima,ciudad,imagen;
    const fechaHoy = obtenerFechaHoy();
    const [buscador, setBuscador] = useState(false);

    function cambiarEstadoBuscador() {
        setBuscador(!buscador);
    }

    //si la informacion en data existe lo almacena en su variable
    if(props.data){
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
                <BuscarClimaCiudad 
                funEstadoBuscador={cambiarEstadoBuscador} 
                funCiudad={props.funCiudad} 
                funBuscarCiudad={buscarCiudad}
                ciudades={ciudades}
                />
            </div>
        )
    }else{
        return(
        <div className="ClimaActual-contenedor">
            <div className="boton-places">
                <button onClick={cambiarEstadoBuscador}>Search for places</button>
            </div>
            <div className="climaActual-imagen">
                <img src={imagen} alt="" />
            </div>
            <div className="climaActual-info">
                <p><span className="ClimaActual-temperatura-numero">{temperatura}</span><span className="ClimaActual-temperatura-letra">°C</span></p>
                <p className="climaActual-tipoClima">{clima}</p>
                <p className="climaActual-fecha">Today - {fechaHoy}</p>
                <p className="climaActual-nombre-ciudad"><i className="fa-solid fa-location-dot"></i> {ciudad}</p>
            </div>
        </div>
    )
    }
}

export default ClimaActual;