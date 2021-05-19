import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
   const [state, setstate] = useState({data:null,loading:true,error:null});
   //usamos useRef para evitar el error de que cuando desaparezca el componente y react no haye donde mostrar los datos nos de error por eso el clean
   const isMounted = useRef(true);

    useEffect(() => {        
       //clean del useeffect
         return () => {
            isMounted.current = false;
        }
    }, [])
   useEffect( () => {  
       //reseteo setState
       setstate({data:null,loading:true,error:null});  
    fetch(url)
        .then( resp => resp.json() )
        .then( data => {

            setTimeout( () => {
                //si isMounted es true
                if(isMounted.current){
                    setstate({
                        loading:false,
                        error : null,
                        data   
                    })
                } else{
                    console.log('setState no se llamo')
                }                
            },4000)            
        })
   },[url])
   return state;
}
