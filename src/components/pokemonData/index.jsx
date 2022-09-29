import { useEffect, useState } from "react"
import "./styles.css"



const PokemonData =  ({ number, name, state }) => {
        const [pokemon, setPokemon] = useState([])
    
        const Api = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
            const data = await resp.json()
    
            setPokemon(data)
        }

        useEffect(() => {
            Api()
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