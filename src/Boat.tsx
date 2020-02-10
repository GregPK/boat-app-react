import React from 'react';

class Boat extends React.Component<any> {
  render() {
    return (
      <div className="App" >
        <p>Name: {this.props.boat.name}</p>
        <p>{this.props.boat.description}</p>
      </div>
    )
  }
}

export default Boat;
