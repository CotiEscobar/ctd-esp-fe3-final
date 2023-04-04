import React from "react";
import { useState } from "react";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones

    const [user, setUser] = useState(
      {
        name: '',
        email: ''
      }
    )
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log('Se envio el form');

      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      let emailTest = emailRegex.test(user.email)

      if(emailTest && user.name.length > 5) {
        setShow(true)
        setError(false)
      } else {
        setError(true)
        setShow(false)
      }
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
            <input 
            type="text"
            onChange={(event) => {setUser({...user, name: event.target.value})}} />

          <label>Email</label>
            <input 
            type="text"
            onChange={(event) => {setUser({...user, email: event.target.value})}} />

          <button>Guardar mis datos</button> 
        </form>

      
        {
        show
        ?
        <p>Gracias {user.name} te contactaremos cuando antes vía mail.</p>
        :
        null
        }

        {
        error
        &&
        <div className='error-msg'>
          <p>Por favor verifique su información nuevamente.</p>
        </div>
        }

        </div>
    );
};

export default Form;
