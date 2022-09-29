import './App.css';

import Pokedex from "../components/Pokedex"
import Main from '../components/Main';


function App() {
  return (
    <div className="App">
     <Main>
      <Pokedex/>
     </Main>
    </div>
  );
}

export default App;
