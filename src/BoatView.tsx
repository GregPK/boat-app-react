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
      <div className="card boat-card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{this.state.boat.name}</p>
              <p className="subtitle is-6 attributes">
                {this.state.boat.size && <span className="attribute"><span className="tag">Size:</span><span className="tag is-success">{this.state.boat.size}</span></span>}
                {this.state.boat.color && <span className="attribute"><span className="tag">Color:</span><span className="tag" style={{ backgroundColor: this.state.boat.color || "transparent" }}><i className="fas fa-ship" ></i>&nbsp;{this.state.boat.color}</span></span>}
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
