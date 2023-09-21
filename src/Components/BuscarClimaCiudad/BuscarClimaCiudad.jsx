import { useState } from "react";

function BuscarClimaCiudad(props) {
    const [ciudades , setCiudades] = useState(["Cartagena", "Medellin", "London" ]);

    function actualizarCiudad(){
        const inpuCiudad = document.querySelector("#inputLocation")
        props.funCiudad(inpuCiudad.value);
        props.funEstadoBuscador();
    }


    return (
        <div className="BuscarClimaCiudad-contenedor">
            <div>
                <i className="fa-solid fa-x" onClick={props.funEstadoBuscador}></i>
            </div>
            <div>
                <span>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="inputLocation" id="inputLocation" placeholder="search location" />
                </span>
                <button onClick={actualizarCiudad} >Search</button>
            </div>
        </div>
    )
}

export default BuscarClimaCiudad;