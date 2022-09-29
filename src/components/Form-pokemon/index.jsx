import { useState } from "react"

import "./styles.css"

import PokemonData from "../pokemonData"
import Buttons from "../Buttons"
import Pokemon from "../pokemon"


const numero = 1;

const Form = () => {
    const [pokemonValue, setPokemonValue] = useState()
    const [pokemon, setPokemon] = useState([])
    const [pokemonImg, setPokemonImg] = useState()
    const [pokemonCounter, setPokemonCounter] = useState(numero + 1)
    const [pokemonCounterPrev, setPokemonCounterPrev] = useState(numero - 1)
    const [pokemonImgPrev, setPokemonImgPrev] = useState()
    const [state, setState] = useState(false)


    const Api = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue || 1}`)
        const data = await resp.json()

        return data
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const pokemonApi = await Api()
        setPokemon(pokemonApi)
        setState(true)
        setPokemonCounter(Number(pokemonApi.id) + 1 )
        setPokemonCounterPrev(Number(pokemonApi.id) - 1 )
        setPokemonImgPrev(pokemonApi.sprites["front_default"])
        setPokemonImg(pokemonApi["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"])
        setPokemonValue('')
        
    }

    const handleClickNext = async () => {
        setPokemonCounter( Number(pokemonCounter) + 1)
        setPokemonCounterPrev(pokemonCounter - 1)
        console.log(pokemonCounter)
        const Api = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCounter}`)
            const data = await resp.json()
            return data
        }

        const pokemonApi = await Api()
        setPokemon(pokemonApi)
        setState(true)
        setPokemonImgPrev(pokemonApi.sprites["front_default"])
        setPokemonImg(pokemonApi["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"])
        setPokemonValue('')

    }

    const handleClickPrev = async () => {
        setPokemonCounterPrev(Number(pokemonCounterPrev  ) - 1)
        setPokemonCounter(pokemonCounterPrev + 1)
        console.log(pokemonCounterPrev)
        const Api = async () => {
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCounterPrev}`)
            const data = await resp.json()
            return data
        }

        const pokemonApi = await Api()
        setPokemon(pokemonApi)
        setState(true)
        setPokemonImgPrev(pokemonApi.sprites["front_default"])
        setPokemonImg(pokemonApi["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"])
        setPokemonValue('')

    }
    
    return (
        
        <>
            <Pokemon state={state} img={pokemonImg} name={pokemon.name} imgAlt={pokemonImgPrev} />
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="search"
                    className="input_search"
                    placeholder="Search"
                    required
                    value={pokemonValue}
                    onChange={({target}) => {
                        setPokemonValue(target.value)
                    }}
                />
            </form>
            <PokemonData number={pokemon.id} name={pokemon.name} state={state} />
            <Buttons handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} />
        </>
    )
}

export default Form