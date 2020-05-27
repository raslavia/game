import React from 'react';

function Tile({ tile: { color, bc, id }, clickMe }) {
  return (
    <div
      className="tile-container"
      style={{ backgroundColor: bc }}
      onClick={() => {
        clickMe(color, id);
      }}
    >
      {color}
    </div>
  );
}
export default Tile;
