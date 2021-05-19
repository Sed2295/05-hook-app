import React, { useRef } from 'react';
import '../02-useEffect/effect.css';
//USE REF SIRVE PARA MANTENER UNA REFERNECIA MUTABLE
export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleclick = () => {
        //forma 1
        //document.querySelector('input').select();
        //forma 2
        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>
            <input className="form-control mb-4" placeholder="Nombre" ref={inputRef}></input>
            <button className="btn btn-primary" onClick={handleclick}>Focus</button>
        </div>
    )
}
