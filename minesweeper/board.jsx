import React from 'react';
import * as Minesweeper from "./minesweeper";
import Tile from "./tile";

class Board extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    // rows will be a 1D array of divs that contain multiple Tiles
    // rows => [<div><Tile /><Tile /><Tile /></div>,
    //          <div><Tile /><Tile /><Tile /></div>,
    //          <div><Tile /><Tile /><Tile /></div>]
    const rows = this.props.board.grid.map((row, rowIdx) => {
      let componentRow = row.map((tile, colIdx) => {
        let tileProps = {
          id: rowIdx * this.props.board.grid.length + colIdx,
          logicTile: tile,
          updateGame: this.props.updateGame,
        };

        return <Tile {...tileProps} />
      });

      return <div className="row">{componentRow}</div>
    });
    
    return (
      <div className="board">
        {rows}
      </div>
    );
  };
};

export default Board;