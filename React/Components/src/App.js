import logo from "./logo.svg";
import "./App.css";
import User from "./components/User.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User
          name="İlke Eren"
          surname="Demirtaş"
          age={17}
          isLoggedIn={true}
          friends={[
            {
              id: 1,
              name: "Ediz",
              age: 17,
            },
            {
              id: 2,
              name: "Yiğit",
              age: 17,
            },
            {
              id: 3,
              name: "Mustafa",
              age: 17,
            },
          ]}
        />
      </header>
    </div>
  );
}

export default App;
