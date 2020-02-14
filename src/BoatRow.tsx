import React from 'react';
import { navigate } from "hookrouter";

class BoatRow extends React.Component<any> {
  show = (event: any) => {
    navigate("boats/" + this.props.boat.id)
  }

  delete = () => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      this.props.onDelete(this.props.boat.id)
    }
  }

  render() {
    return (
      <tr className="App">
        <td>{this.props.boat.id}</td>
        <td>
          <div className="buttons">
            <a href={"/boats/" + this.props.boat.id} className="button is-info is-small">
              <span className="icon">
                <i className="fas fa-eye"></i>
              </span>
            </a>
            <a href={"/boats/" + this.props.boat.id + "/edit"} className="button is-warning is-small">
              <span className="icon">
                <i className="fas fa-edit"></i>
              </span>
            </a>
            <button onClick={this.delete} className="button is-danger is-small">
              <span className="icon">
                <i className="fas fa-trash"></i>
              </span>
            </button>
          </div>
        </td>
        <td onClick={this.show} className="name">{this.props.boat.name}</td>
        <td>{this.props.boat.description}</td>
      </tr >
    )
  }
}

export default BoatRow;
