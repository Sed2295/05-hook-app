import React, { useEffect,useState } from 'react'
//Ejemplo en react de como usar el return de useEffect sirve para limpiar y no almacenar en cache el mismo proceso varias veces.
export const Message = () => {

    const [coords, setCoords] = useState({x:0,y:0})
    const {x,y} = coords;

    useEffect( () => {
        const mouseMove = (e) => { 
            const coordenadas = { x:e.x, y:e.y }
            setCoords(coordenadas);
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log('Componente desmontado')
            window.removeEventListener('mousemove',mouseMove)
        }
    },[])

    return (
        <>
           <h3>Eres genial</h3>
            <p>x:{x} y:{y}</p>
        </>
    )
}
