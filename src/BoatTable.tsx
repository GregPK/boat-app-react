import React from 'react';
import BoatRow from './BoatRow'

class BoatTable extends React.Component<any> {
  state = { boats: [] }
  componentDidMount() {
    fetch("http://localhost:3004/boats")
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
  render() {
    let boatComps = this.state.boats.map((boat: any) => <BoatRow key={boat.id} boat={boat} />)
    return (
      <table className="App" >
        <thead>
          <tr>
            <td>Id</td>
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
