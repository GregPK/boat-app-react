import React from 'react';
import BoatRow from './BoatRow'

import Auth from './Auth'

class BoatTable extends React.Component<any> {
  state = { boats: [] }
  componentDidMount() {
    const params = Auth().addHeader({})
    console.log(params)
    fetch("http://localhost:3004/boats", params)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            boats: result
          })
        },
        (error) => {
          console.error(error)
        }
      )
  }

  onDeleteBoat = (boatId: string) => {
    fetch("http://localhost:3004/boats/" + boatId, { method: 'DELETE' })
      .then(
        (result) => {
          this.setState({
            boats: this.state.boats.filter((boat: any) => boat.id !== boatId)
          })
        },
        (error) => {
          console.error(error)
        }
      )
  }

  render() {
    let boatComps = this.state.boats.map((boat: any) => <BoatRow key={boat.id} boat={boat} onDelete={this.onDeleteBoat} />)
    return (
      <table className="boat-table table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <td>Id</td>
            <td>Action</td>
            <td>Name</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {boatComps}
        </tbody>
      </table>
    )
  }
}

export default BoatTable;
