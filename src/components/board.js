import React from 'react';
import Tile from './tile';

const Board = ({ stateTiles, clickTry }) => {
  return (
    <div className="container">
      {stateTiles &&
        stateTiles.map((tile) => <Tile key={tile.id} tile={tile} clickMe={clickTry}></Tile>)}
    </div>
  );
};

export default Board;
