import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHooks = () => {

    const {state:counter,increment} = useCounter(1);

    const {loading,data} =  useFetch(`https://www.breakingbadapi.com/api/characters/${counter}`);
    //console.log(data)
    //!! es igual a false en la linea de abajo forzamos  que aunque sea null cumpla y obtengamos data[0]  
        const {name,birthday} = !!data && data[0]
        

    return (
        <div>
            <h1>Custom Hooks!</h1><br/>
            <h2>Breaking Bad</h2>
            <hr/>
            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading ...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-3">{name} </p>
                            <footer className="blockquote-footer">{birthday}</footer>
                        </blockquote>
                    )
            }   
            <button className="btn btn-success" onClick={increment}>Siguiente personaje</button>     
        </div>
    )
}
