import './App.css';
import Contacts from "./components/Contacts/index";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Contacts />
      </ChakraProvider>
    </div>
  );
}

export default App;
