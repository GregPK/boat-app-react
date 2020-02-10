import React from 'react';
import './App.css';

import Boat from './Boat'

const App = () => {
  let boats = [
    { name: 'B1', description: 'B1d' },
    { name: 'B2', description: 'B2d' }
  ]

  let boatComps = boats.map((boat: any) => <Boat boat={boat} />)

  return (
    <div className="App">
      {boatComps}
    </div>
  );
}

export default App;
