import "./styles.css"


const Pokemon = ({ img, state, name, imgAlt }) => {
    
    const pokemonImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"

    return (
        <>
            {!state && (
                <img className="pokemon_image" src={pokemonImg} alt={name} />
            )}
            {img == null && state ? (<img className="pokemon_image" src={imgAlt} alt={name} />) : (
                <img className="pokemon_image" src={img} alt={name} />
            )}
        </>
    )
}

export default Pokemon