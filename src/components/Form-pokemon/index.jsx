import "./styles.css"

import PokemonData from "../pokemonData"
import Buttons from "../Buttons"
import Pokemon from "../pokemon"
import { useEffect, useState } from "react"
import { useMyRook } from '../../contexts'

import * as types from "../../contexts/types"

const Form = () => {
    const [value, setValue] = useState("")
    const [pokemonData, setPokemonData] = useState([])

    const { state ,dispatch } = useMyRook()

    useEffect(() => {
        const ApiPokemon = async () => {
            dispatch({ type: types.LOADING, payload: true })

            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${ state.pokemonId || 1}`)
            if(resp.status === 404){
                dispatch({ type: types.LOADING, payload: false })

                alert('Pokemon não encontrado')
                dispatch({ type: types.POKEMON_ID, payload: 1 })
            }
            const data = await resp.json()
    
            setPokemonData(data)
            dispatch({ type: types.LOADING, payload: false })
        }

        ApiPokemon()
    }, [dispatch, state.pokemonId])

    useEffect(() => {
        
        dispatch({ type: types.POKEMON_NAME, payload: pokemonData.name })
        dispatch({ type: types.POKEMON_ID, payload: pokemonData.id })
    }, [dispatch, pokemonData.id, pokemonData.name])

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({ type: types.POKEMON_ID, payload: value })

        setValue('')

    }

    return (
        
        <>
            <Pokemon />
            <form className="form" onSubmit={ handleSubmit}>
                <input
                    type="search"
                    className="input_search"
                    placeholder="Search"
                    required
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                />
            </form>
            <PokemonData number={pokemonData.id} name={pokemonData.name} />
            <Buttons />
        </>
    )
}

export default Form