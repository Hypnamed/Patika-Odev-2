import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("Eren");
  const [age, setAge] = useState(16)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Merhaba {name} {age}!</h1>
        <button onClick={() => setName("Ediz")}>Ediz</button>
        <button onClick={() => setName("Eren")}>Eren</button>


      </header>
    </div>
  );
}

export default App;
