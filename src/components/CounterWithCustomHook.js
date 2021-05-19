import React from 'react';
import { useCounter } from '../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state:counter,increment,decrement,reset} = useCounter();
    return (
        <>
           <h1>Counter with custom hook { counter } </h1>
           <hr/>
           {/*Necesitamos poner funcion flecha por que el primer argumento de la funcion es el evento y si no la ponemos da error  */}
           <button onClick={()=> {increment(1) }} className="btn btn-success col-4"> +1 </button>
           <button onClick={()=> {decrement(1) }} className="btn btn-warning col-4"> -1 </button>
           <button onClick={reset} className="btn btn-danger col-4"> Reset </button>
        </>
    )
}
