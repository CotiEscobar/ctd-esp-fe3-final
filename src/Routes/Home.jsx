import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const {dentists} = useGlobalStates();

    return (
      <main className="" >
        <h1>Home</h1>
        <div className='card-grid'>
        {dentists.map(dentist => 
          <Card
          name={dentist.name}
          username={dentist.username}
          id={dentist.id}/>)
        }

          {/* Aqui deberias renderizar las cards */}
{/*           <div>
            {dentists.map(dentist => (
                <div key={dentist.id}>
                    <h3>{dentist.id}</h3>
                    <h3>{dentist.name}</h3>
                    <h3>{dentist.email}</h3>
                </div>
            ))}
        </div> */}
        </div>
      </main>
    )
}

export default Home