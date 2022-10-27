import { useMyRook } from "../../contexts"
import "./styles.css"

import * as types from "../../contexts/types"


const Buttons = () => {
    const { state, dispatch } = useMyRook()

    const handlePrev = () => {
        if(state.pokemonId < 2){
            alert('Não há mais pokeon')
            return
        }
        dispatch({ type: types.PREV_POKEMON, payload: state.pokemonId })
    }

    const handleNext = () => {
        if( state.pokemonId > 904){
            alert('Não há mais pokeon')
            return
        }
        dispatch({ type: types.NEXT_POKEMON, payload: state.pokemonId })
    }

    return (
        <div className="buttons">
            <button onClick={handlePrev} className="btn btn-prev">Prev &lt;</button>
            <button onClick={handleNext} className="btn btn-next">Next &gt;</button>
        </div>
    )
}
export default Buttons