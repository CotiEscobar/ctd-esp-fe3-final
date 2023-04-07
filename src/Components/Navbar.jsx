import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'
import '../Styles/styles.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()
  const {state, dispatch} = useGlobalStates();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/home"><h3>Home</h3></Link>
      <Link to="/dentist/:id"><h3>Dentist</h3></Link>
      <Link to="/contact"><h3>Contact</h3></Link>
      <Link to="/favs"><h3>Favs</h3></Link>
      <button onClick={() => navigate(-3)}>↩</button>

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Change theme
      </button>

      <div className={state.darkMode ? "dark-mode" : "light-mode"}>
            Hola
      </div>
    </nav>
  )
}

export default Navbar