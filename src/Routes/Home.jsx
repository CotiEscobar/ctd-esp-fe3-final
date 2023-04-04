import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const [dentists, setDentists] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(()=>{
      fetch(url)
      .then(res => res.json())
      .then(data => console.log(setDentists(data)))
      console.log(dentists)
    },[])

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