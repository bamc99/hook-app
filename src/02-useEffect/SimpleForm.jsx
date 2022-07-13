import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'bamc',
        email: 'brunomen99@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })

    }

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

            <h1>Simple Form</h1>
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

            {
                (username === 'strider2') && <Message />
            }

        </>
  )
}
