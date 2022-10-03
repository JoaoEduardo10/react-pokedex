import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Buttons from "."




describe('<Button />', () => {
    it('will yield the button', () => {
        const fn = jest.fn()
        render(<Buttons handleClickNext={fn} />)

        const buttonNex = screen.getByRole("button",{name: /next/i})
        const buttonPrev = screen.getByRole('button', {name: /prev/i})

        expect(buttonNex).toBeInTheDocument()
        expect(buttonPrev).toBeInTheDocument()

        userEvent.click(buttonNex)

        expect(buttonNex).not.toBeDisabled()

        userEvent.click(buttonPrev)

        expect(buttonPrev).not.toBeDisabled()

    })
})