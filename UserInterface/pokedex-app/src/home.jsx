import React from 'react'
import Search from './components/Search.jsx'
import { fetchPokemon } from './fetch/getPokemon.js'

const HomePage = () => {

    const [pokemon, setPokemon] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getPokemon = async (query) => {
        setLoading(true);
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
        setLoading(false);
    }
    return (
        <div>
         <Search getPokemon={getPokemon} />
        {!loading && pokemon ? (
            <div>
                <h2>{pokemon.name}</h2>
            </div>
        ): null}
        </div>
    )
}

export default HomePage
