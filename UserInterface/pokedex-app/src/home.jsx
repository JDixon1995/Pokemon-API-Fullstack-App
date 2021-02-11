import React from 'react'
import Search from './components/Search.jsx'

const HomePage = () => {

    const getPokemon = (query) => {
        console.log(query);
    }
    return (
        <div>
         <Search getPokemon={getPokemon} />   
        </div>
    )
}

export default HomePage
