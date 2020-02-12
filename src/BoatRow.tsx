import React from 'react';
import { navigate } from "hookrouter";

class BoatRow extends React.Component<any> {
  show = (event: any) => {
    navigate("boats/" + this.props.boat.id)
  }

  render() {
    return (
      <tr className="App" onClick={this.show}>
        <td>{this.props.boat.id}</td>
        <td>{this.props.boat.name}</td>
        <td>{this.props.boat.description}</td>
      </tr >
    )
  }
}

export default BoatRow;
