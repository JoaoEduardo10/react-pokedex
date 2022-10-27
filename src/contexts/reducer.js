import * as types from "./types";

export const reducer = (state, actions) => {
    switch (actions.type) {
        case types.POKEMON_ID:{
            return {...state, pokemonId: actions.payload}
        }
        case types.NEXT_POKEMON:{
            return {...state, pokemonId: actions.payload + 1}
        }
        case types.PREV_POKEMON:{
            return {...state, pokemonId: actions.payload - 1}
        }
        case types.POKEMON_NAME:{
            return {...state, pokemonName: actions.payload}
        }
        case types.LOADING:{
            return {...state, loading: actions.payload}
        }
    
        default:
    }

    return {...state}
}
