import { render, screen } from "@testing-library/react"
import PokemonData from "."

const mock = {
    number: 1,
    name: "pokemon",
    stado: true
}

describe("<PokemonData />",() => {
    it("must be on the screen",() => {
        const {debug} = render(<PokemonData number={mock.number} name={mock.name} state={mock.stado} />)

        const primarySpan = screen.getByText(mock.number)
        const segundarySpan = screen.getByText(mock.name)

        expect(primarySpan).toBeInTheDocument()
        expect(segundarySpan).toBeInTheDocument()

    })
})