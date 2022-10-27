import "./styles.css"

const PokemonData =  ({ number, name }) => {
        

    return (
        <h1 className="pokemon_data">
            <span className="pokemon_naber">{number}</span> - 
                <span className="Pokemon_name">{name}</span>
        </h1>
    )
}

export default PokemonData