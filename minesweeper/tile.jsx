import React from 'react';
import * as Minesweeper from "./minesweeper";

class Tile extends React.Component {
  constructor(props) {
    super(props);

  };

  handleClick(event) {
    event.preventDefault();
    
    if (!this.props.logicTile.explored) {
      const flagging = event.altKey;
  
      this.props.updateGame(this.props.logicTile, flagging);
    }



    // this.setState({})
    // if (!revealed) {
    //   if ()

    //   if (this) {
    //     do this;
    //   } else {
    //     do that
    //   }
    // } else {
    //   do nothing
  };
  
  render() {
    let icon = "";
    
    if (this.props.logicTile.bombed) {
      icon = "☢";
    }

    if (this.props.logicTile.flagged) {
      icon = "⚐";
    }

    if (this.props.logicTile.explored) {
      icon = `${this.props.logicTile.adjacentBombCount()}`;
    }

    // How do we add class to the div?
    return (
      <>
        <div
          onClick={handleClick}
          id={this.props.id}
          key={this.props.id}
        >
          {icon}
        </div>
      </>
    );
  };
  
};

export default Tile;