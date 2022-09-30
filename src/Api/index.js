

const Api = async (pokemonValue) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue || 1}`)
    const data = await resp.json()

    return data
}

export default Api