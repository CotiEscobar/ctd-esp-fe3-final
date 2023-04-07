import { createContext, useContext, useState, useReducer, useEffect } from "react";

const GlobalStates = createContext()

const initialState = {
    darkMode: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                darkMode: !state.darkMode
            };
        default:
            return state;
    }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.darkMode);

  const [dentists, setDentists] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(setDentists(data)))
    console.log(dentists)
  },[])
  
  return (
    <GlobalStates.Provider value={{state, dispatch, dentists, setDentists}}>
      {children}
    </GlobalStates.Provider>
  );
}; 

export default ContextProvider;
export const useGlobalStates = () => useContext(GlobalStates)