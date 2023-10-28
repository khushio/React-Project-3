import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors, onColorSelect }) {
  const [isColorListVisible, setColorListVisible] = useState(false);

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorSelect = (color) => {
    onColorSelect(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker">
      {isColorListVisible && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </ul>
      )}
      <button className="pick-button" onClick={toggleColorList}>
        Pick a color
      </button>
    </div>
  );
}

export default ColorPicker;

