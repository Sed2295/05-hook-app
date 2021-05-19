import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './Layout.css';

//useLayoutEffect sirve para leer elementos y caracteristicas despues del renderizado

export const Layout = () => {

    const {state:counter,increment} = useCounter(1);

    const {data} =  useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`);
    //console.log(data)
    //!! es igual a false en la linea de abajo forzamos  que aunque sea null cumpla y obtengamos data[0]  
        const {name} = !!data && data[0]

        const parrafo = useRef();

        const [boxSize,setboxSize] = useState({});

        useLayoutEffect( () => {
            setboxSize(parrafo.current.getBoundingClientRect());
        },[name])
        
    return (
        <div>
            <h1>Layout Effect</h1><br/>
            <h2>Breaking Bad</h2>
            <hr/>            
                <blockquote className="blockquote text-right">
                    <p className="mb-3" ref={ parrafo }> {name} </p>                    
                </blockquote> 

            <pre>{JSON.stringify(boxSize,null,3)}
            </pre>          
            <button className="btn btn-success" onClick={increment}>Siguiente personaje</button>     
        </div>
    )
}
