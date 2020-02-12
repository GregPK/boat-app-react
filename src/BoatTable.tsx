import React from 'react';
import BoatRow from './BoatRow'

class BoatTable extends React.Component<any> {
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
  state = { boats: [] }
  render() {
    let boatComps = this.state.boats.map((boat: any) => <BoatRow boat={boat} />)
    return (
      <table className="App" >
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </thead>
        {boatComps}
      </table>
    )
  }
}

export default BoatTable;
