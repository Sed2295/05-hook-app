import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';
export const FormWithCustomHook = () => {
    //hacemos uso del custom hook llamado useForm
    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });

    const {name,email,password} = formValues;

    useEffect( () => {
        console.log('email cambio')
    },[email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form with Custom Hook</h1>            
            <hr/>
            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu nombre" autoComplete="off" value={name} onChange={handleInputChange}></input>
            </div><br/>
            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="Tu email" autoComplete="off" value={email} onChange={handleInputChange}></input>
            </div><br/>
            <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Password" autoComplete="off" value={password} onChange={handleInputChange}></input>
            </div><br/>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}
