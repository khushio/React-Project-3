import React, { useState } from 'react';
import './App.css';
import ColorPicker from "./components/ColorPicker";

function App() {
  const colors = ["aqua","blue","pink","magenta","purple","green","yellow","orange","red","brown","grey","black"];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const appStyles = {
    backgroundColor: selectedColor || '#ffffff', // Set the background color
  };

  return (
    <div className="app" style={appStyles}>
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} onColorSelect={handleColorSelect} />
    </div>
  );
}

export default App;
