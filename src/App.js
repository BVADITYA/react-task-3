import React from 'react';
import ColorPicker from './components/colorpicker'; 
import './App.css';

function App() {
  const colors = [
    'red',
    'green',
    'darkblue',
    'yellow',
    'pink',
    'cyan',
    'gold',
    'purple',
    'green',
    'orange',
    'lightblue',
    'brown',
    'darkyellow'
  ];

  return (
    <div className="App" style={{ backgroundColor: 'lightpurple' }}>
      <header className="App-header">
        <h1>Color Picker </h1>
      </header>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
