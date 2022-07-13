import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {


    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });



    // const { username, email, password } = formState;

    // useEffect(() => {
    //     console.log('useEffect called!');
    // },[]);

    // useEffect(() => {
    //     console.log('FormState change!');
    // },[formState]);

    // useEffect(() => {
    //     console.log('email change!');
    // },[email]);
    

    
    return (
        <>

            <h1>Formulario con Custom Hook</h1>
            <hr />
            <input 
                type="text"
                className="form-control mb-3" 
                placeholder="Username"
                name="username" 
                value={ username }
                onChange = { onInputChange }
            />

            <input 
                type="email"
                className="form-control mb-3" 
                placeholder="bruno@gmail.com"
                name="email" 
                value={ email }
                onChange = { onInputChange }

            />

            <input 
                type="password"
                className="form-control mb-3" 
                placeholder="Contraseña"
                name="password" 
                value={ password }
                onChange = { onInputChange }

            />

            <button onClick={ onResetForm } className="btn btn-primary w-100">Borrar</button>

        </>
  )
}
