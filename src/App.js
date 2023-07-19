import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import QRCard from './Components/QRCard';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <QRCard />
      </div>      
    </ChakraProvider>
  );
}

export default App;
