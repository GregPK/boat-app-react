import React from 'react';

class BoatView extends React.Component<any> {
  state = { boat: { id: "", name: "", description: "", size: 0, color: null } }
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
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{this.state.boat.name}</p>
              <p className="subtitle is-6">
                {this.state.boat.size && <span>Size: {this.state.boat.size}</span>}
                {this.state.boat.color && <span>, &nbsp;Color: <i className="fas fa-ship" style={{ color: this.state.boat.color || "transparent" }}></i></span>}
              </p>
            </div>
          </div>
          <div className="content">
            {this.state.boat.description} <br />
          </div>
        </div>
      </div >
    )
  }
}

export default BoatView;
