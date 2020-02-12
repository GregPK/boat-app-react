import React from 'react';

class BoatView extends React.Component<any> {
  state = { boat: { id: "", name: "", description: "" } }
  componentDidMount() {
    fetch("http://localhost:3004/boats/" + this.props.boatId)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            boat: result
          })
        },
        (error) => {
          console.error(error)
        }
      )
  }

  render() {
    return (
      <div className="Boat" >
        {this.state.boat.id}<br />
        {this.state.boat.name}<br />
        {this.state.boat.description}<br />
      </div>
    )
  }
}

export default BoatView;
