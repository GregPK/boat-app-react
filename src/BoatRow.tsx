import React from 'react';

// import Link from "react-router-dom";

class BoatRow extends React.Component<any> {
  render() {
    return (
      <tr className="App" >
        <td>{this.props.boat.id}</td>
        <td>{this.props.boat.name}</td>
        <td>{this.props.boat.description}</td>
      </tr>
    )
  }
}

export default BoatRow;
