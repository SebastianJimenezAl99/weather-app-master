import "./CardWeather.css"

function CardWeather(props) {
    let fecha,icon,temp_max,temp_min;
    if (props.data) {
     fecha;
     icon =`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
     temp_max = Math.ceil(props.data.main.temp_max);
     temp_min = Math.ceil(props.data.main.temp_min);
    }
console.log(props.data.main);
    function obtenerFecha(dia) {
        if (dia==0) {
            return 'Tomorrow'
        }else{
            const opciones = { weekday: 'short', day: 'numeric', month: 'short' };
            const fecha = new Date();
            fecha.setDate(fecha.getDate() + dia);
            return fecha.toLocaleDateString(undefined, opciones);
        }
       
    }

    

    obtenerFecha();
    return(
        <div className="CardWeather-contenedor">
            <span className="CardWeather-fecha">{obtenerFecha(props.index)}</span>
            <img src={icon} alt="" />
            <div className="contenedor-temperatura">
                <span>{temp_max}°C</span>
                <span className="min-temp">{temp_min}°C</span>
            </div>
        </div>
    )
}

export default CardWeather;