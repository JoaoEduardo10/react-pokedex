import { useMyRook } from "../../contexts"
import "./styles.css"

const srcImgGif = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"

const srcImgPng = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const Pokemon = () => {
    const { state } = useMyRook()


    return (
        <>
           {state.pokemonId < 650 && <img className="pokemon_image" src={`${srcImgGif}${state.pokemonId}.gif`} alt={state.pokemonName} />}
           {state.pokemonId > 649 && 
            <img className="pokemon_image" src={`${srcImgPng}${state.pokemonId}.png`} alt={state.pokemonName}/>
           }
        </>
    )
}

export default Pokemon