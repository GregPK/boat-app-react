import React from 'react';
import { navigate } from 'hookrouter';
import Auth from './Auth'

class BoatEdit extends React.Component<any> {
  state = { boat: { id: "", name: "", description: "", size: 0, color: "" } }
  componentDidMount() {
    const params = Auth().addHeader({})
    fetch("http://localhost:3004/boats/" + this.props.boatId, params)
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

  handleChange = (event: any) => {
    const targetName = event.target.name
    const targetVal = event.target.value

    this.setState((previousState: any) => {
      let prevBoat = previousState.boat
      prevBoat[targetName] = targetVal
      return prevBoat
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target)

    const params = Auth().addHeader({ method: 'PUT', body: data })
    fetch("http://localhost:3004/boats/" + this.props.boatId, params)
      .then(
        (result) => {
          navigate("/boats/" + this.props.boatId)
        },
        (error) => {
          console.error(error)
        }
      )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Editing boat {this.state.boat.name}</h1>
            </div>
          </div>

        </section>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name="name" placeholder="Boaty McBoatface" onChange={this.handleChange} value={this.state.boat.name} />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="input" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.boat.description} />
          </div>
        </div>

        <div className="field">
          <label className="label">Size</label>
          <div className="control">
            <input className="input" type="number" name="size" placeholder="20" onChange={this.handleChange} value={this.state.boat.size} />
          </div>
        </div>

        <div className="field">
          <label className="label">Color</label>
          <div className="control">
            <input className="input" type="text" name="color" placeholder="rgb(0,0,0) or 'red'" onChange={this.handleChange} value={this.state.boat.color || ""} />
          </div>
          <div className="control">
            <button style={{ backgroundColor: this.state.boat.color }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <a href="/boats" className="button is-link is-light">Back to list</a>
          </div>
        </div>
      </form>
    )
  }
}

export default BoatEdit;
