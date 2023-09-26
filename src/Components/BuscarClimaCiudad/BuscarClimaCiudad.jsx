
import "./BuscarClimaCiudad.css";

function BuscarClimaCiudad(props) {
    
    function actualizarCiudad(){
        const inpuCiudad = document.querySelector("#inputLocation")
        props.funCiudad(inpuCiudad.value);
        props.funEstadoBuscador();
        props.funBuscarCiudad(inpuCiudad.value.charAt(0).toUpperCase() + inpuCiudad.value.slice(1));
    }

    function clicCity(city){
        props.funCiudad(city);
        props.funEstadoBuscador();
        props.funBuscarCiudad(city);
    }


    return (
        <div className="BuscarClimaCiudad-contenedor">
            <div className="BuscarClimaCiudad-close">
                <i className="fa-solid fa-x" onClick={props.funEstadoBuscador}></i>
            </div>
            <div className="BuscarClimaCiudad-input-botton">
                <span className="BuscarClimaCiudad-inputs">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="inputLocation" id="inputLocation" placeholder="search location" />
                </span>
                <button onClick={actualizarCiudad} >Search</button>
            </div>
            {
                props.ciudades.map((city,i)=>{
                    return(
                        <a key={i} className="BuscarClimaCiudad-resultado" onClick={()=>clicCity(city)}>
                            <span>{city}</span><i className="fa-solid fa-angle-right"></i>
                        </a>
                    );
                })
            }
            
        </div>
    )
}

export default BuscarClimaCiudad;