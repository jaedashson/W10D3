import React from "react";
import * as Minesweeper from "./minesweeper";
import Tile from "./tile";
import Board from "./board"

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(this.props.gridSize, this.props.numBombs),
    };

    this.updateGame = this.updateGame.bind(this);
  };

  updateGame(logicTile, flagging) {
    
  };

  render() {
    const boardProps = { 
      board: this.state.board, 
      updateGame: this.updateGame
    };

    return (
      <>
        <Board {...boardProps} />
      </>
    );
  };

};

export default Game;