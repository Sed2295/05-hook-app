import React,{useState,useEffect} from 'react';
import { Message } from './Message';
import './effect.css';
export const SimpleForm = () => {
    const [formState, setformState] = useState({
        name:'',
        email:''
    });
    const {name,email} = formState;
    //mandamos el arreglo vacio para solo ejecutarlo una vez
    useEffect( () => {
        //console.log('Se dispara el effect por ser primera vez de renderizado del componente');
    },[]);

    useEffect( () => {
        //console.log('El formstate cambio');
    },[formState]);
    //Aui usamos el useEffect para disparar una accion cada vez que deseemos
    useEffect( () => {
        //console.log('email cambio');
    },[email]);

    const handleInputChange = ({ target }) => {
        /* console.log(e.target.name);
        console.log(e.target.value); */
        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect</h1>            
            <hr/>
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange}></input>
            </div><br/>
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Tu email" autoComplete="off" value={email} onChange={handleInputChange}></input>
            </div>
            { name === '123' && <Message/> }
        </>
    )
}
