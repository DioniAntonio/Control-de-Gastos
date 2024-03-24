import { useState } from "react"
import Mensaje from "./Mensaje"
import CerrarBtn from "./img/cerrar.svg"



const Modal = ({setModal,animarModal, setAnimarModal, guardarGasto}) => {
    const [mensaje, setMensaje] = useState("")
   
    const [nombre,setNombre] = useState("")
    const [cantidad, setCantidad]= useState("")
    const [categoria, setCategoria] = useState("")
   
    const ocultarModal = () => {
        
        setAnimarModal(false)

        setTimeout(()=>{
            setModal(false)

        },500)

    }

    const handleSubmit = e => {
        e.preventDefault()
        
        if([nombre,cantidad,categoria].includes("")){
            setMensaje("Todos los campos son obligatorios")
            
            setTimeout(()=>{
                setMensaje("")
            },3000)
            
            return
        }
        guardarGasto({cantidad,nombre,categoria})

    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
            src={CerrarBtn}
            alt="cerrar modal"
            onClick={ocultarModal} 
            />
        </div>
        <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Nombre de Gasto</label>
                <input 
                    id="nombre"    
                    type="text"
                    placeholder="añade el nombre de el gasto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                        />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">cantidad</label>
                <input 
                    id="cantidad"    
                    type="number"
                    placeholder="añade la cantidad de el gasto: ej. 300"
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))} />
            </div>

            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select 
                id="categoria"
                value={categoria}
                onChange={e => setCategoria(e.target.value)}
                >

                    <option value="">Seleccione</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">ocio</option>
                    <option value="salud">salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>

            <input 
            type="submit"
            value="Añadir Gasto"
            />

        </form>
    </div>
  )
}

export default Modal
