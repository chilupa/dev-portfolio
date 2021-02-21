import React from 'react';
import Home from './pages/Home/Home';

function App() {
  const colorPalette = {
    pink: { textColor: 'white', backgroundColor: 'pink' },
    green: { textColor: 'white', backgroundColor: 'green' },
    gray: { textColor: 'white', backgroundColor: 'gray' },
    blue: { textColor: 'white', backgroundColor: 'blue' },
    gold: { textColor: 'black', backgroundColor: 'gold' },
  };

  return (
    <div className="App">
      <Home
        textColor={colorPalette['gold'].textColor}
        backgroundColor={colorPalette['gold'].backgroundColor}
      />
    </div>
  );
}

export default App;
