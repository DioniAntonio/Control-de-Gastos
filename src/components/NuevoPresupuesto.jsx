import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
    }) => {
    const [mensaje, setMensaje] = useState("")  
    
    const hanldePresupuesto = (e) => {
        e.preventDefault();

        if(!(presupuesto) ||(presupuesto) < 0){
            setMensaje("no es un presupuesto valido")
            return
        }
        setMensaje("")
        setIsValidPresupuesto(true)
    }


  return (
    <div className="contenedor-presupuesto contenedor sombra">

        <form onSubmit={hanldePresupuesto} className="formulario">

            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                
                <input  type="number"
                        className="nuevo-presupuesto"
                        placeholder="añade tu presupuesto"
                        value={presupuesto}
                        onChange={e =>setPresupuesto(Number(e.target.value))}
                         />

                <input type="submit" value="Añadir" />
                
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}      
            </div>
        </form>
    </div>
  )
}

export default NuevoPresupuesto
