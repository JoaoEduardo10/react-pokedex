import './App.css';

import Pokedex from "../../components/Pokedex"
import Main from '../../components/Main';
import { AppContext } from "../../contexts"


function App() {
  return (
    <div className="App">
    <AppContext>
      <Main>
      <Pokedex/>
      </Main>
     </AppContext>
    </div>
  );
}

export default App;
