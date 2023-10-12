import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div className="color-picker">
      <div className="color-list">
        {showColors && (
          colors.map((color, index) => (
            color !== 'cream' && (
              <div
                key={index}
                className="color"
                style={{ backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              ></div>
            )
          ))
        )}
      </div>
      <button className="pick-button" onClick={handleButtonClick}>
        Pick a color
      </button>
      {selectedColor && (
        <div className="output-box">
          <p>Selected Color: {selectedColor}</p>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
