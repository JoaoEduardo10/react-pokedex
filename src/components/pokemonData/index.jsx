import { useEffect, useState } from "react"
import "./styles.css"

import Api from "../../Api"


const PokemonData =  ({ number, name, state }) => {
        const [pokemon, setPokemon] = useState([])

        

        useEffect(() => {
           Api()
           .then(data => setPokemon(data))
        },[])
        

    return (
        <h1 className="pokemon_data">
            {!state && (
                <>
                    <span className="pokemon_naber">{String(pokemon.id)}</span> - <span className="Pokemon_name">{String(pokemon.name)}</span>
                </>
            )}

            {state && (
                <>
                <span className="pokemon_naber">{number}</span> - 
                <span className="Pokemon_name">{name}</span>
                </>
            )}
        </h1>
    )
}

export default PokemonData