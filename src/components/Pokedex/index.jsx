import pokedex from "../../img/pokedex.png"
import "./style.css"


import Form from "../Form-pokemon"


const Pokedex = () => {
   return (
      <>
         <img className="pokedex" src={pokedex} alt="pokedex" />
         <Form />
      </>
   )
}

export default Pokedex