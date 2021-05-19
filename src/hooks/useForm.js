import {useState} from 'react';
//inicializamos initial state en caso de que venga vacio
export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState)

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name] : target.value
        })
    }

    return [values, handleInputChange];
}
