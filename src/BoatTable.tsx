import React from 'react';
import BoatRow from './BoatRow'

import Auth from './Auth'
import handleResponse from './ResponseHandler'

class BoatTable extends React.Component<any> {
  state = { boats: [] }
  componentDidMount() {
    const params = Auth().addHeader({})
    fetch("http://localhost:3004/boats", params)
      .then(res => res.json())
      .then((result) => {
        handleResponse().validate(result, () =>
          this.setState({
            boats: result
          })
        )
      })
  }

  onDeleteBoat = (boatId: string) => {
    const params = Auth().addHeader({ method: 'DELETE' })
    fetch("http://localhost:3004/boats/" + boatId, params)
      .then(res => res.json())
      .then((result) => {
        handleResponse().validate(result, () =>
          this.setState({
            boats: this.state.boats.filter((boat: any) => boat.id !== boatId)
          })
        )
      })
  }

  render() {
    let boatComps = this.state.boats.map((boat: any) => <BoatRow key={boat.id} boat={boat} onDelete={this.onDeleteBoat} />)
    return (
      <section>
        <a className="button is-link" href="/boats/new"><i className="fas fa-plus-square"></i>&nbsp;Add new boat</a>
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
      </section>
    )
  }
}

export default BoatTable;
