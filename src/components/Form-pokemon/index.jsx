import { useRef, useState } from "react"

import "./styles.css"

import PokemonData from "../pokemonData"
import Buttons from "../Buttons"
import Pokemon from "../pokemon"
import Api from "../../Api"
import condicionalSubmit from "../functions/condicionais"
import { condicionalClick } from "../functions/condicionais"


const Form = () => {
    const [pokemonValue, setPokemonValue] = useState()
    const [pokemon, setPokemon] = useState([])
    const [pokemonImg, setPokemonImg] = useState()
    const [pokemonCounter, setPokemonCounter] = useState(2)
    const [pokemonCounterPrev, setPokemonCounterPrev] = useState(0)
    const [pokemonImgPrev, setPokemonImgPrev] = useState()
    const [state, setState] = useState(false)
    const inputRef = useRef()


    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        condicionalSubmit(pokemonValue, inputRef, setPokemonValue)
        
        const pokemonApi = await Api(pokemonValue)
        setPokemon(pokemonApi)
        setState(true)
        setPokemonCounter(Number(pokemonApi.id) + 1 )
        setPokemonCounterPrev(Number(pokemonApi.id) - 1 )
        setPokemonImgPrev(pokemonApi.sprites["front_default"])
        setPokemonImg(pokemonApi["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"])
        setPokemonValue('')
        
    }

    const handleClickNext = async () => {
        const condicao = pokemonCounter > 898
        condicionalClick(condicao,inputRef)

        setPokemonCounter( Number(pokemonCounter) + 1)
        setPokemonCounterPrev(pokemonCounter - 1)

        const pokemonApi = await Api(pokemonCounter)
        setPokemon(pokemonApi)
        setState(true)
        setPokemonImgPrev(pokemonApi.sprites["front_default"])
        setPokemonImg(pokemonApi["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"])
        setPokemonValue('')

    }

    const handleClickPrev = async () => {
        const condicao = pokemonCounterPrev < 1
        condicionalClick(condicao, inputRef)

        setPokemonCounterPrev(Number(pokemonCounterPrev  ) - 1)
        setPokemonCounter(pokemonCounterPrev + 1)

        const pokemonApi = await Api(pokemonCounterPrev)
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
                    ref={inputRef}
                />
            </form>
            <PokemonData number={pokemon.id} name={pokemon.name} state={state} />
            <Buttons handleClickNext={handleClickNext} handleClickPrev={handleClickPrev} />
        </>
    )
}

export default Form